// Based on {@link module:three/examples/jsm/postprocessing/UnrealBloomPass.js} by spidersharma and bhouston

import { NoBlending, RawShaderMaterial, Uniform, Vector2 } from 'three';

import vertexShader from '../shaders/UnrealBloomBlurPass.vert.js';
import fragmentShader from '../shaders/UnrealBloomBlurPass.frag.js';

export class UnrealBloomBlurMaterial extends RawShaderMaterial {
    constructor(kernelRadius) {
        super({
            defines: {
                KERNEL_RADIUS: kernelRadius,
                SIGMA: kernelRadius
            },
            uniforms: {
                tMap: new Uniform(null),
                uDirection: new Uniform(new Vector2(0.5, 0.5)),
                uResolution: new Uniform(new Vector2())
            },
            vertexShader,
            fragmentShader,
            blending: NoBlending,
            depthWrite: false,
            depthTest: false
        });
    }
}