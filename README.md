<p align="center">
    <img src="https://github.com/pschroen/alien.js/raw/master/examples/assets/images/alienkitty.png" alt="Alien.js" width="510">
</p>

<h1 align="center">Alien.js</h1>

<p align="center">
    <a href="https://www.npmjs.com/package/alien.js">
        <img src="https://img.shields.io/npm/v/alien.js" alt="NPM Package">
    </a>
    <a href="https://lgtm.com/projects/g/pschroen/alien.js">
        <img src="https://img.shields.io/lgtm/alerts/github/pschroen/alien.js" alt="Security Status">
    </a>
</p>

<p align="center"><b>Future web pattern</b></p>

<br>

Alien.js is a [MVC](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller) design pattern for building [single-page applications](https://en.wikipedia.org/wiki/Single-page_application) with ES modules and [three.js](https://threejs.org/), intended for developers who are interested in creating their own shaders.

The post-processing workflow takes a more linear approach, so instead of abstracting with an effect composer, you work directly with the render targets, making it easier to build custom effects.

The idea is to keep it simple, with minimal abstraction, and to build websites more like a framework, which is why [rollup.js](https://rollupjs.org/) is used instead for bundling.

In its design, everything is an ES module, all user interfaces and components follow the same class structure, making it easy to copy-paste from examples and between projects.

*Note this design pattern intentionally does not use underscores or private fields, in favour of cleaner code.*

### Examples

#### ui

[logo](https://alien.js.org/examples/ui_logo.html) (interface)  
[progress](https://alien.js.org/examples/ui_progress_canvas.html) (canvas)  
[progress](https://alien.js.org/examples/ui_progress.html) (svg)  
[progress indeterminate](https://alien.js.org/examples/ui_progress_indeterminate.html) (svg)  
[close](https://alien.js.org/examples/ui_close.html) (svg)  
[magnetic](https://alien.js.org/examples/ui_magnetic.html) (component, svg)  
[tilt](https://alien.js.org/examples/ui_tilt.html)  
[styles](https://alien.js.org/examples/ui_styles.html)  
[fps](https://alien.js.org/examples/ui_fps.html)  
[fps panel](https://alien.js.org/examples/ui_fps_panel.html)  
[panel](https://alien.js.org/examples/ui_panel.html) (standalone)  
[panel tracking](https://alien.js.org/examples/3d_panel_tracking.html) (3d scene, [debug](https://alien.js.org/examples/3d_panel_tracking.html?debug))  
[page transition](https://alien.js.org/examples/transitions/page/) (3d scene)  
[page transition](https://alien.js.org/examples/transitions/canvas/) (3d scene, canvas mask transition)  
[smooth scroll](https://alien.js.org/examples/transitions/scroll_content/) (3d scene, [debug](https://alien.js.org/examples/transitions/scroll_content/?debug))  
[smooth scroll](https://alien.js.org/examples/transitions/scroll_content_skew/) (3d scene with skew effect, [debug](https://alien.js.org/examples/transitions/scroll_content_skew/?debug))  
[smooth scroll](https://alien.js.org/examples/transitions/scroll_content_views/) (3d scene with scroll direction and camera parallax, [debug](https://alien.js.org/examples/transitions/scroll_content_views/?debug))  
[ufo](https://ufo.ai/) (2d scene, smooth scroll with skew effect)  

#### 3d

[ripple](https://alien.js.org/examples/3d_ripple.html)  
[cubemap uv](https://alien.js.org/examples/3d_cubemap_uv.html)  
[spherical cube uv](https://alien.js.org/examples/3d_spherical_cube_uv.html)  
[penrose triangle](https://alien.js.org/examples/3d_penrose_triangle.html)  
[abstract cube](https://alien.js.org/examples/3d_abstract_cube.html)  
[polyhedron](https://alien.js.org/examples/3d_polyhedron.html) (orbit camera, [debug](https://alien.js.org/examples/3d_polyhedron.html?debug))  
[crystal gltf](https://alien.js.org/examples/3d_crystal_gltf.html) (orbit camera, [debug](https://alien.js.org/examples/3d_crystal_gltf.html?debug), [orbit controls](https://alien.js.org/examples/3d_crystal_gltf.html?orbit))  
[cubecamera](https://alien.js.org/examples/3d_cubecamera.html) (orbit camera, [debug](https://alien.js.org/examples/3d_cubecamera.html?debug))  
[cubecamera rainbow](https://alien.js.org/examples/3d_cubecamera_rainbow.html) (orbit camera, [debug](https://alien.js.org/examples/3d_cubecamera_rainbow.html?debug))  
[camera wobble](https://alien.js.org/examples/3d_camera_wobble.html)  
[camera transition](https://alien.js.org/examples/transitions/camera/) (with motion blur and tilt shift effect, [debug](https://alien.js.org/examples/transitions/camera/?debug))  
[panel tracking](https://alien.js.org/examples/3d_panel_tracking.html) ([debug](https://alien.js.org/examples/3d_panel_tracking.html?debug))  
[panel tracking crystals](https://alien.js.org/examples/3d_panel_tracking_crystals.html) ([debug](https://alien.js.org/examples/3d_panel_tracking_crystals.html?debug))  
[crystals](https://alien.js.org/examples/3d_crystals.html) ([orbit controls](https://alien.js.org/examples/3d_crystals.html?orbit))  
[dark crystals](https://alien.js.org/examples/3d_dark_crystals.html) ([orbit controls](https://alien.js.org/examples/3d_dark_crystals.html?orbit))  

#### shader

[noise](https://alien.js.org/examples/shader_noise.html)  
[fxaa](https://alien.js.org/examples/shader_fxaa.html)  
[blur](https://alien.js.org/examples/shader_blur.html) (Gaussian blur)  
[blur](https://alien.js.org/examples/shader_poisson_disc_blur.html) (Poisson disc blur)  
[blur](https://alien.js.org/examples/shader_bokeh_blur.html) (Bokeh blur)  
[bloom](https://alien.js.org/examples/shader_bloom.html)  
[bloom](https://alien.js.org/examples/shader_unreal_bloom.html) (Unreal bloom)  
[bloom](https://alien.js.org/examples/shader_bloom_dither.html) (Unreal bloom with dither)  
[matcap](https://alien.js.org/examples/shader_matcap.html)  
[pbr](https://alien.js.org/examples/shader_pbr.html)  
[soft particles](https://alien.js.org/examples/shader_soft_particles.html)  
[tilt shift](https://alien.js.org/examples/shader_tilt_shift.html) (with Gaussian blur)  
[dof](https://alien.js.org/examples/shader_dof_fake.html) (fake with Bokeh blur, [debug](https://alien.js.org/examples/shader_dof_fake.html?debug))  
[chromatic aberration](https://alien.js.org/examples/shader_chromatic_aberration.html)  
[film grain](https://alien.js.org/examples/shader_film_grain.html)  
[reflection](https://alien.js.org/examples/shader_reflection.html) (with fast Gaussian blur)  
[reflection diffuse](https://alien.js.org/examples/shader_reflection_diffuse.html) (physically based material)  
[reflection metalness](https://alien.js.org/examples/shader_reflection_metalness.html) (physically based material)  
[reflection normalmap](https://alien.js.org/examples/shader_reflection_normalmap.html) (physically based material)  
[reflection dudv](https://alien.js.org/examples/shader_reflection_dudv.html) (DuDv)  
[flowmap](https://alien.js.org/examples/shader_flowmap.html)  
[flowmap](https://alien.js.org/examples/shader_flowmap_rgbshift.html) (RGB shift)  
[flowmap](https://alien.js.org/examples/shader_flowmap_view.html) (view)  
[depth](https://alien.js.org/examples/shader_depth.html) (fragment depth with dither)  
[fresnel](https://alien.js.org/examples/shader_fresnel.html) (with looping noise)  
[hologram](https://alien.js.org/examples/shader_hologram.html)  
[subsurface scattering](https://alien.js.org/examples/shader_subsurface_scattering.html) (SSS)  
[volumetric light](https://alien.js.org/examples/shader_volumetric_light.html) (god rays)  
[anamorphic light](https://alien.js.org/examples/shader_anamorphic_light.html) (fast anamorphic lens flares)  
[lensflare](https://alien.js.org/examples/shader_lensflare.html)  
[lensflare](https://alien.js.org/examples/shader_anamorphic_light_lensflare.html) (with anamorphic light)  
[baked cube](https://alien.js.org/examples/shader_baked_cube.html)  
[baked cube](https://alien.js.org/examples/shader_baked_cube_dudv.html) (DuDv)  
[baked cube](https://alien.js.org/examples/shader_baked_cube_sss.html) (SSS, [debug](https://alien.js.org/examples/shader_baked_cube_sss.html?debug))  
[baked abstract cube](https://alien.js.org/examples/shader_baked_abstract_cube.html)  
[baked abstract cube](https://alien.js.org/examples/shader_baked_abstract_cube_dudv.html) (DuDv)  
[baked abstract cube](https://alien.js.org/examples/shader_baked_abstract_cube_sss.html) (SSS, [debug](https://alien.js.org/examples/shader_baked_abstract_cube_sss.html?debug))  
[baked spherical cube](https://alien.js.org/examples/shader_baked_spherical_cube.html)  
[baked spherical cube](https://alien.js.org/examples/shader_baked_spherical_cube_dudv.html) (DuDv)  
[baked spherical cube](https://alien.js.org/examples/shader_baked_spherical_cube_sss.html) (SSS, [debug](https://alien.js.org/examples/shader_baked_spherical_cube_sss.html?debug))  
[soft shadows](https://alien.js.org/examples/shader_soft_shadows.html)  
[text](https://alien.js.org/examples/shader_text.html) (MSDF text)  
[afterimage](https://alien.js.org/examples/shader_afterimage.html)  
[transition](https://alien.js.org/examples/transitions/shader/) (mask)  
[transition](https://alien.js.org/examples/transitions/shader_fade/) (fade with RGB shift)  
[transition](https://alien.js.org/examples/transitions/scene/) (scene)  
[transition](https://alien.js.org/examples/transitions/scene_direction/) (scene with page direction and camera parallax)  
[transition](https://alien.js.org/examples/transitions/scroll/) (scroll, [debug](https://alien.js.org/examples/transitions/scroll/?debug))  
[transition](https://alien.js.org/examples/transitions/scroll_direction/) (scroll direction and camera parallax, [debug](https://alien.js.org/examples/transitions/scroll_direction/?debug))  
[camera transition](https://alien.js.org/examples/transitions/camera/) (with motion blur and tilt shift effect, [debug](https://alien.js.org/examples/transitions/camera/?debug))  
[alienkitty](https://alienkitty.com/) (2d scene, flowmap with RGB shift, MSDF text)  

#### physics

[instancing](https://alien.js.org/examples/3d_physics_instancing.html) (SSS, [debug](https://alien.js.org/examples/3d_physics_instancing.html?debug))  
[instancing](https://alien.js.org/examples/3d_physics_instancing_thread.html) (physics thread, SSS, [debug](https://alien.js.org/examples/3d_physics_instancing_thread.html?debug))  
[picking](https://alien.js.org/examples/3d_physics_picking.html) (contact audio, SSS, [debug](https://alien.js.org/examples/3d_physics_picking.html?debug))  
[picking](https://alien.js.org/examples/3d_physics_picking_thread.html) (physics thread, contact audio, SSS, [debug](https://alien.js.org/examples/3d_physics_picking_thread.html?debug))  

#### audio

[picking](https://alien.js.org/examples/3d_physics_picking.html) (with fast 3d audio, [debug](https://alien.js.org/examples/3d_physics_picking.html?debug))  
[rhythm](https://alien.js.org/examples/audio_rhythm.html)  

#### thread

[canvas](https://alien.js.org/examples/canvas_thread.html) (noise)  
[pbr](https://alien.js.org/examples/shader_pbr.html) (texture loader thread)  
[cubemap uv](https://alien.js.org/examples/3d_cubemap_uv.html) (buffer geometry loader thread)  
[instancing](https://alien.js.org/examples/3d_physics_instancing_thread.html) (physics thread)  
[picking](https://alien.js.org/examples/3d_physics_picking_thread.html) (physics thread)  
[multiuser blocks](https://multiuser-blocks.glitch.me/) (websocket thread, [glitch](https://glitch.com/edit/#!/multiuser-blocks))  

#### websockets

[json](https://hello-websockets-json.glitch.me/) ([glitch](https://glitch.com/edit/#!/hello-websockets-json))  
[binary](https://hello-websockets-binary.glitch.me/) ([glitch](https://glitch.com/edit/#!/hello-websockets-binary))  
[multiuser fluid](https://multiuser-fluid.glitch.me/) (binary, [glitch](https://glitch.com/edit/#!/multiuser-fluid))  
[multiuser blocks](https://multiuser-blocks.glitch.me/) (binary, [glitch](https://glitch.com/edit/#!/multiuser-blocks))  

#### transitions

[page](https://alien.js.org/examples/transitions/page/)  
[canvas](https://alien.js.org/examples/transitions/canvas/) (mask)  
[shader](https://alien.js.org/examples/transitions/shader/) (mask)  
[shader](https://alien.js.org/examples/transitions/shader_fade/) (fade with RGB shift)  
[scene](https://alien.js.org/examples/transitions/scene/)  
[scene](https://alien.js.org/examples/transitions/scene_direction/) (page direction and camera parallax)  
[scroll](https://alien.js.org/examples/transitions/scroll/) ([debug](https://alien.js.org/examples/transitions/scroll/?debug))  
[scroll](https://alien.js.org/examples/transitions/scroll_direction/) (scroll direction and camera parallax, [debug](https://alien.js.org/examples/transitions/scroll_direction/?debug))  
[scroll](https://alien.js.org/examples/transitions/scroll_content/) (smooth scroll, [debug](https://alien.js.org/examples/transitions/scroll_content/?debug))  
[scroll](https://alien.js.org/examples/transitions/scroll_content_skew/) (smooth scroll with skew effect, [debug](https://alien.js.org/examples/transitions/scroll_content_skew/?debug))  
[scroll](https://alien.js.org/examples/transitions/scroll_content_views/) (smooth scroll with scroll direction and camera parallax, [debug](https://alien.js.org/examples/transitions/scroll_content_views/?debug))  
[camera](https://alien.js.org/examples/transitions/camera/) (with motion blur and tilt shift effect, [debug](https://alien.js.org/examples/transitions/camera/?debug))  

### Class structure

```js
import { Events } from '../config/Events.js';
import { Interface } from '../utils/Interface.js';
import { Stage } from '../utils/Stage.js';

class Logo extends Interface {
    constructor() {
        super('.logo');

        this.initHTML();

        this.addListeners();
        this.onResize();
    }

    initHTML() {
        this.css({
            left: 50,
            top: 50,
            width: 64,
            height: 64,
            cursor: 'pointer',
            opacity: 0
        });

        this.image = new Interface(null, 'img');
        this.image.attr({ src: 'assets/images/alienkitty.svg' });
        this.image.css({
            position: 'relative',
            width: '100%'
        });
        this.add(this.image);
    }

    addListeners() {
        Stage.events.on(Events.RESIZE, this.onResize);
        this.element.addEventListener('mouseenter', this.onHover);
        this.element.addEventListener('mouseleave', this.onHover);
        this.element.addEventListener('click', this.onClick);
    }

    removeListeners() {
        Stage.events.off(Events.RESIZE, this.onResize);
        this.element.removeEventListener('mouseenter', this.onHover);
        this.element.removeEventListener('mouseleave', this.onHover);
        this.element.removeEventListener('click', this.onClick);
    }

    /**
     * Event handlers
     */

    onResize = () => {
        const { width, height } = Stage;

        if (width < height) {
            this.css({
                left: 30,
                top: 30,
                width: 40,
                height: 40
            });
        } else {
            this.css({
                left: 50,
                top: 50,
                width: 64,
                height: 64
            });
        }
    };

    onHover = ({ type }) => {
        this.clearTween();

        if (type === 'mouseenter') {
            this.tween({ opacity: 0.6 }, 300, 'easeOutCubic');
        } else {
            this.tween({ opacity: 1 }, 300, 'easeOutCubic');
        }
    };

    onClick = () => {
        // open('https://alien.js.org/');
        Stage.setPath('/');
    };

    /**
     * Public methods
     */

    animateIn = () => {
        this.tween({ opacity: 1 }, 600, 'easeInOutSine');
    };

    destroy = () => {
        this.removeListeners();

        return super.destroy();
    };
}
```

### Class hierarchy

```mermaid
classDiagram
class Preloader {
  init()
  onComplete()
}
class App {
  init()
  onResize()
  onUpdate(time, delta, frame)
}
class WorldController {
  renderer
  scene
  camera
  resolution
  aspect
  time
  frame
  init()
  resize(width, height, dpr)
  update(time, delta, frame)
}
class CameraController {
  init(camera)
  resize(width, height)
  update()
}
class SceneController {
  init(view)
  resize()
  update()
}
class InputManager {
  init(camera)
  update(time)
  add(...objects)
  remove(...objects)
}
class RenderManager {
  init(renderer, scene, camera)
  resize(width, height, dpr)
  update()
}
class AudioController {
  init()
  trigger(event, ...params)
}
Preloader --> App
App --> WorldController
App --> CameraController
App --> SceneController
App --> InputManager
App --> RenderManager
SceneController --> SceneView
App --> SceneView
SceneView --> "many" View : Contains
Group <|-- SceneView
Group <|-- View
```

### Getting started

Clone this repository template and install its dependencies:

```sh
git clone https://github.com/pschroen/alien.js
cd alien.js
npm i

# or

npx degit pschroen/alien.js my-app
cd my-app
npm i
```

```sh
# Serve at localhost:8080
npm run dev

# Build for production
npm run build
```

[localhost:8080/](http://localhost:8080/) (without ui)  
[localhost:8080/?ui](http://localhost:8080/?ui) (with ui)  
[localhost:8080/?ui&orbit](http://localhost:8080/?ui&orbit) (with ui and orbit controls)  
[localhost:8080/?orbit](http://localhost:8080/?orbit) (just orbit controls)

### With examples

```sh
npm i
cd examples
npm i
npm run build
npm start
```

### With ESLint

```sh
npm i -D eslint eslint-plugin-html
npx eslint src
npx eslint examples/*.html
npx eslint examples/about/src
npx eslint examples/transitions
```

### Resources

* [The Wiki](https://github.com/pschroen/alien.js/wiki)
* [Example project structure](https://github.com/pschroen/alien.js/wiki/Project-structure)
* [Tween](https://github.com/pschroen/alien.js/wiki/Tween)
* [Changelog](https://github.com/pschroen/alien.js/releases)

### See also

* [Three.js](https://github.com/mrdoob/three.js)
* [Post Processing](https://github.com/pmndrs/postprocessing)
* [OGL](https://github.com/oframe/ogl)
