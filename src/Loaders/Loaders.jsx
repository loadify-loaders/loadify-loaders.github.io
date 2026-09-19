import Loader1 from '../Components/Loaders/Loader1/Loader'
import Loader2 from '../Components/Loaders/Loader2/Loader'
import Loader3 from '../Components/Loaders/Loader3/Loader'
import Loader4 from '../Components/Loaders/Loader4/Loader'
import Loader5 from '../Components/Loaders/Loader5/Loader'
import Loader6 from '../Components/Loaders/Loader6/Loader'
import Loader7 from '../Components/Loaders/Loader7/Loader'
import Loader8 from '../Components/Loaders/Loader8/Loader'
import Loader9 from '../Components/Loaders/Loader9/Loader'
import Loader10 from '../Components/Loaders/Loader10/Loader'
import Loader11 from '../Components/Loaders/Loader11/Loader'
import Loader12 from '../Components/Loaders/Loader12/Loader'
import Loader13 from '../Components/Loaders/Loader13/Loader'

const LoadersData = [
    {
        id: 1,
        category: 'circle',
        react:
`
<div className='circle'></div>

`,
        css:
`
.circle {
    width: 3rem;
    aspect-ratio: 1;
    border-radius: 50%;
    border: .4rem solid #fff;
    border-bottom-color: transparent;
    border-left-color: transparent;
    animation: rotate 1s linear infinite;
}

@keyframes rotate {
    to {
        transform: rotate(360deg);
    }
}   
    `,
        component: <Loader1 />
    },
    {
        id: 2,
        category: 'rectangle',
        react:
 `
<div className='loader'>
    <div className='rectangle'></div>
</div>

`,
        css:
`
.loader {
    perspective: 500px;
}

.rectangle {
    width: 3.5rem;
    aspect-ratio: 1;
    background-color: #fff;
    border-radius: .2rem;
    animation: flip 1s linear infinite;
}

@keyframes flip {
    50% {
        transform: rotateY(180deg);
    }

    100% {
        transform: rotateZ(180deg);
    }
}
    `,
        component: <Loader2 />
    },
    {
        id: 3,
        category: 'circle',
        react:
`
<div className='loader'>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
</div>
    `,  
        css: 
`
.loader {
    width: 3rem;
    aspect-ratio: 1;
    border-radius: 50%;
    position: relative;
    animation: rotate 2s linear infinite;
}

.loader span {
    --i: 0;
    position: absolute;
    width: .3rem;
    height: 25%;
    background-color: #fff;
    left: 50%;
    top: 0;
    transform: rotate(calc(var(--i) * 30deg)) translate(-50%, 0);
    transform-origin: 0 1.5rem;
    border-radius: .3rem;
}

.loader span:nth-child(2) {
    --i: 1
}

.loader span:nth-child(3) {
    --i: 2
}

.loader span:nth-child(4) {
    --i: 3
}

.loader span:nth-child(5) {
    --i: 4
}

.loader span:nth-child(6) {
    --i: 5
}

.loader span:nth-child(7) {
    --i: 6
}

.loader span:nth-child(8) {
    --i: 7
}

.loader span:nth-child(9) {
    --i: 8
}

.loader span:nth-child(10) {
    --i: 9
}

.loader span:nth-child(11) {
    --i: 10
}

.loader span:nth-child(12) {
    --i: 11
}

@keyframes rotate {
    to {
        transform: rotate(360deg);
    }
}
    `,
        component: <Loader3 />
    },
    {
        id:4,
        category: 'dots',
        react:
`
<div className='loader'></div>
    `,
        css:
`
.loader {
    aspect-ratio: 1;
    background-color: #fff;
    border-radius: 50%;
    animation: pulse 1s ease-in-out infinite;
}

@keyframes pulse {

    0%,
    100% {
        width: 1rem;
    }

    50% {
        width: 2rem;
    }
}
    `,
        component: <Loader4/>
    },
    {
        id: 5,
        category: 'dots',
        react: 
`
<div className='loader'>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
</div>
    `,
    css: 
`
.loader {
    width: 6rem;
    position: relative;
}

.loader span {
    position: absolute;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background-color: #fff;
    top: 50%;
    left: 0;
    transform: translate(0, -50%);
    opacity: 0;
    animation: slide 1s linear infinite;
}

.loader span:nth-child(2) {
    animation-delay: .2s;
}

.loader span:nth-child(3) {
    animation-delay: .4s;
}

.loader span:nth-child(4) {
    animation-delay: .6s;
}

.loader span:nth-child(5) {
    animation-delay: .8s;
}

.loader span:nth-child(6) {
    animation-delay: 1s;
}

@keyframes slide {
    50% {
        left: 100%;
        opacity: 0;
    }

    99% {
        opacity: 0;
    }

    1%,
    100% {
        opacity: 1;
    }
}
    `,
        component: <Loader5/>
    },
    {
        id: 6,
        react:
`
<div className='loader'></div>
    `,
        css:
`
.loader {
    width: 1rem;
    aspect-ratio: 1;
    background-color: #fff;
    opacity: .5;
    border-radius: .2rem;
    animation: fadeIn 1.5s ease-in-out infinite;
}

@keyframes fadeIn {
    50% {
        width: 2rem;
        opacity: 1;
    }
}
    `,
        category: 'rectangle',
        component: <Loader6/>
    },
    {
        id: 7,
        category: 'rectangle',
        react:
`
<div className='loader'>
    <div className='rectangle1'></div>
    <div className='rectangle2'></div>
</div>
    `,
        css: 
`
.loader {
    width: 3.5rem;
    aspect-ratio: 1;
    position: relative;
}

.rectangle1,
.rectangle2 {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 50%;
    top: 50%;
    border: .2rem solid red;
    animation: rotateLeft 2s linear infinite;
}

.rectangle2 {
    border: .2rem solid #fff;
    animation: rotateRight 2s linear infinite;
}

@keyframes rotateLeft {
    to {
        transform: rotate(-360deg);
    }
}

@keyframes rotateRight {
    to {
        transform: rotate(360deg);
    }
}
    `,
        component: <Loader7/>
    },
    {
        id: 8,
        category: 'circle',
        react: 
`
<div className='loader'>
    <div className='outer-circle'></div>
    <div className='inner-circle'></div>
</div>  
    `,
    css:
`
.circle {
    position: relative;
    width: 3rem;
    aspect-ratio: 1;
}

.outer-circle {
    position: absolute;
    width: 100%;
    height: 100%;
    border: .3rem solid #fff;
    border-radius: 50%;
    border-left-color: transparent;
    animation: rotate-left 1s linear infinite;
}

.inner-circle {
    position: absolute;
    width: 70%;
    height: 70%;
    border-radius: 50%;
    border: .3rem solid red;
    border-right-color: transparent;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: rotate-right 1s linear infinite;
}

@keyframes rotate-left {
    to {
        transform: rotate(360deg);
    }
}

@keyframes rotate-right {
    to {
        transform: translate(-50%, -50%) rotate(-360deg);
    }
}
    `,
        component: <Loader8/>
    },
    {
        id: 9,
        category: 'rectangle',
        react:
`
<div className='loader'>
    <span></span>
    <span></span>
    <span></span>
</div>
    `,
        css:
`
.loader {
    width: 1rem;
    height: 1rem;
    position: relative;
}

.loader span {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #fff;
    border-radius: .1rem;
}

.loader span:nth-child(1) {
    animation: leftBar 4s ease infinite;
}

.loader span:nth-child(3) {
    animation: rightBar 4s ease infinite;
}

.loader span:nth-last-child(2) {
    animation: middleBar 4s ease infinite;
}

@keyframes leftBar {
    25% {
        top: -2rem;
        left: 0;
    }

    50% {
        top: -2rem;
        left: -2rem;
    }

    75% {
        top: 0;
        left: -2rem;
    }

    100% {
        top: 0;
        left: 0;
    }
}

@keyframes rightBar {
    25% {
        top: -2rem;
        left: 0;
    }

    50% {
        top: -2rem;
        left: 2rem;
    }

    75% {
        top: 0;
        left: 2rem;
    }

    100% {
        top: 0;
        left: 0;
    }
}

@keyframes middleBar {
    25% {
        top: 0;
    }

    50% {
        top: -2rem;
    }

    75%,
    100% {
        top: 0;
    }
}
    `,
        component: <Loader9/>
    },
    {
        id: 10,
        category: 'circle',
        react:
`
<div className='Loader'>
    <div className='circle'></div>
</div>
    `,
        css:
`
.Loader {
    width: 3rem;
    aspect-ratio: 1;
    border-radius: 50%;
    outline: .4rem solid #fff;
    outline-offset: -.4rem;
    position: relative;
}

.circle {
    position: absolute;
    top: 0;
    width: 100%;
    aspect-ratio: 1;
    border-radius: 50%;
    border: .4rem solid transparent;
    border-top-color: red;
    animation: rotate 1s linear infinite;
}

@keyframes rotate {
    to {
        transform: rotate(360deg);
    }
}
    `,
        component: <Loader10/>
    },
    {
        id: 11,
        category: 'circle',
        react:
`
<div className='loader'>
    <div className='circle-left'></div>
    <div className='circle-right'></div>
</div>
    `,
        css:
`
.loader {
    position: relative;
    width: 3rem;
    aspect-ratio: 1;
    animation: loaderRotate 4s linear infinite;
}

.circle-left {
    position: absolute;
    width: 100%;
    aspect-ratio: 1;
    background-color: #fff;
    clip-path: inset(0 50% 0 0);
    border-radius: 50%;
    animation: circleLeft 4s linear infinite;
}

.circle-right {
    position: absolute;
    width: 100%;
    aspect-ratio: 1;
    background-color: #fff;
    clip-path: inset(0 0 0 50%);
    border-radius: 50%;
    animation: circleRight 4s linear infinite;
}

@keyframes circleLeft {

    25%,
    50% {
        transform: translateY(-1.5rem);
    }

    75% {
        transform: translateY(0);
    }

}

@keyframes circleRight {

    25%,
    50% {
        transform: translateY(1.5rem);
    }

    75% {
        transform: translateY(0);
    }
}

@keyframes loaderRotate {
    25% {
        transform: rotate(0);
    }

    50%,
    75% {
        transform: rotate(90deg);
    }

}
    `,
        component: <Loader11/>

    },
    {
        id: 12,
        category: 'rectangle',
        react:
`
<div className='loader'>
    <div className='rectangle'></div>
</div>
    `,
        css:
`
.loader {
    width: 5rem;
    height: 1rem;
}

.rectangle {
    width: 1rem;
    aspect-ratio: 1;
    background-color: #fff;
    border-radius: .1rem;
    transform-origin: center;
    animation: roll 2.5s ease infinite;
}

@keyframes roll {
    25% {
        transform: translateX(1rem) rotate(90deg);
    }

    50% {
        transform: translateX(2rem) rotate(180deg);
    }

    75% {
        transform: translateX(3rem) rotate(270deg);
    }

    100% {
        transform: translateX(4rem) rotate(360deg);
        opacity: 1;
    }
}
    `,
        component: <Loader12/>
    },
    {
        id: 13,
        category: 'dots',
        react:
`
<div className='loader'>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
</div>
    `,
        css:
`
.loader {
    width: auto;
    height: auto;
    display: flex;
    flex-direction: row;
    gap: .2rem;
}

.loader span {
    width: 1rem;
    aspect-ratio: 1;
    background-color: #fff;
    border-radius: 50%;
    opacity: .2;
}

.loader span:nth-child(1) {
    animation: firstCircle linear 1s infinite;
}

.loader span:nth-child(2) {
    animation: secondCircle linear 1s infinite;
}

.loader span:nth-child(3) {
    animation: thirdCircle linear 1s infinite;
}

.loader span:nth-child(4) {
    animation: fourthCircle linear 1s infinite;
}

@keyframes firstCircle {
    20% {
        opacity: 1;
    }

    40% {
        opacity: .2;
    }
}

@keyframes secondCircle {
    40% {
        opacity: 1;
    }

    60% {
        opacity: .2;
    }
}

@keyframes thirdCircle {
    60% {
        opacity: 1;
    }

    80% {
        opacity: .2;
    }
}

@keyframes fourthCircle {
    80% {
        opacity: 1;
    }

    100% {
        opacity: .2;
    }
}
    `,
        component: <Loader13/>
    }
]

export default LoadersData