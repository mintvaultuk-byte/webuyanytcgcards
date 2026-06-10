import { useEffect, useRef } from 'react'
import * as THREE from 'three'

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`

const fragmentShader = `
  uniform float time;
  uniform vec2 resolution;
  uniform sampler2D uTexture;
  varying vec2 vUv;

  const float PI = 3.14159265359;
  const float rotationSpeed = 0.05;

  float sdBox(vec2 p, vec2 b) {
    vec2 d = abs(p) - b;
    return length(max(d, 0.0)) + min(max(d.x, d.y), 0.0);
  }

  vec4 getBackground(vec2 p, float t) {
    float aspect = resolution.x / resolution.y;
    p.x *= aspect;
    float box = sdBox(p, vec2(0.4 * aspect, 0.58));
    float d = abs(box) - 0.02;
    float roundedRect = smoothstep(0.0, 0.002, d);
    vec4 bg = mix(vec4(0.0, 0.0, 0.0, 0.0), vec4(1.0), roundedRect);
    float cornerShadow = smoothstep(0.05, 0.0, length(p) - 0.02);
    bg.a *= (1.0 - cornerShadow * 0.3);
    return bg;
  }

  vec2 getRotatedUV(vec2 uv, float angle) {
    float cosA = cos(angle);
    float sinA = sin(angle);
    return mat2(cosA, -sinA, sinA, cosA) * (uv - 0.5) + 0.5;
  }

  void main() {
    vec2 uv = vUv;
    float t = time * rotationSpeed;
    float rotation = t + sin(t * 0.5) * 0.2;
    float breathing = 1.0 + 0.02 * sin(t * 2.0);
    uv = uv * 2.0 - 1.0;
    uv *= breathing;
    uv = getRotatedUV(uv * 0.5 + 0.5, rotation);
    uv.y += sin(uv.x * 5.0 + t) * 0.02;
    vec4 texColor = texture2D(uTexture, uv);
    float aspect = resolution.x / resolution.y;
    vec2 p = (vUv * 2.0 - 1.0) * vec2(aspect, 1.0);
    float boxShape = sdBox(p, vec2(0.4 * aspect, 0.58));
    float cardAlpha = 1.0 - smoothstep(0.0, 0.001, boxShape);
    float edgeHighlight = smoothstep(0.002, 0.0, abs(boxShape) - 0.001);
    vec4 cardColor = vec4(texColor.rgb * 0.8, texColor.a) + vec4(0.2, 0.2, 0.3, 1.0) * edgeHighlight;
    vec4 bg = getBackground(p * 0.5, time * 0.1);
    vec4 finalColor = mix(bg, cardColor, cardAlpha);
    float vignette = 1.0 - smoothstep(0.5, 1.5, length(p));
    finalColor.rgb *= vignette;
    gl_FragColor = finalColor;
  }
`

export default function TradingCardSpotlight() {
  const containerRef = useRef<HTMLDivElement>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const frameRef = useRef<number>(0)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, container.offsetWidth / container.offsetHeight, 0.1, 1000)
    camera.position.z = 0.5

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setSize(container.offsetWidth, container.offsetHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    container.appendChild(renderer.domElement)
    rendererRef.current = renderer

    const textureLoader = new THREE.TextureLoader()
    const texture = textureLoader.load('/assets/grid-texture.jpg')
    texture.wrapS = THREE.RepeatWrapping
    texture.wrapT = THREE.RepeatWrapping

    const geometry = new THREE.PlaneGeometry(2, 2)
    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        time: { value: 0.0 },
        resolution: { value: new THREE.Vector2(container.offsetWidth, container.offsetHeight) },
        uTexture: { value: texture },
      },
      transparent: true,
    })

    const mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)

    const clock = new THREE.Clock()

    const animate = () => {
      frameRef.current = requestAnimationFrame(animate)
      material.uniforms.time.value = clock.getElapsedTime()
      renderer.render(scene, camera)
    }
    animate()

    const handleResize = () => {
      if (!container) return
      const w = container.offsetWidth
      const h = container.offsetHeight
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
      material.uniforms.resolution.value.set(w, h)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(frameRef.current)
      renderer.dispose()
      geometry.dispose()
      material.dispose()
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }
    }
  }, [])

  return (
    <div
      ref={containerRef}
      style={{
        position: 'absolute',
        top: 0,
        right: 0,
        width: '55%',
        height: '100%',
        zIndex: 0,
      }}
      className="hidden md:block"
    />
  )
}
