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
            syncTouch:true,
            touchMultiplier:1.5,
            anchors:true,
        }}>
            { children }
        </ReactLenis>
    )
}
export default SmoothScroll;