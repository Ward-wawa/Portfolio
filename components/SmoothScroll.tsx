"use client"
import gsap from 'gsap'
import {ScrollTrigger} from "gsap/ScrollTrigger";
import { ReactLenis} from 'lenis/react'
import {PropsWithChildren} from 'react'
gsap.registerPlugin(ScrollTrigger)
function SmoothScroll({children}: PropsWithChildren<{}>) {
    return (
        <ReactLenis root options={{
            duration:3,
            lerp:0.06,
            touchInertiaMultiplier:0.7,
            wheelMultiplier:0.8,
            syncTouch:true,
            touchMultiplier:2.4,
            anchors:true,
        }}>
            { children }
        </ReactLenis>
    )
}
export default SmoothScroll;