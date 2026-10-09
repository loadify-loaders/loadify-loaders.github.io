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
import Loader14 from '../Components/Loaders/Loader14/Loader'
import Loader15 from '../Components/Loaders/Loader15/Loader'
import Loader16 from '../Components/Loaders/Loader16/Loader'
import Loader17 from '../Components/Loaders/Loader17/Loader'
import Loader18 from '../Components/Loaders/Loader18/Loader'
import Loader19 from '../Components/Loaders/Loader19/Loader'
import Loader20 from '../Components/Loaders/Loader20/Loader'
import Loader21 from '../Components/Loaders/Loader21/Loader'
import Loader22 from '../Components/Loaders/Loader22/Loader'

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
    <span></span>
</div>
    `,
        css:
`
.loader {
    position: relative;
    width: 2rem;
    aspect-ratio: 1;
    background-color: aliceblue;
    border-radius: 50%;
    position: relative;
    animation: rotate 1s linear infinite;
}

.loader span {
    position: absolute;
    width: .6rem;
    aspect-ratio: 1;
    border-radius: 50%;
    top: 0;
    left: 0;
    transform: translate(-100%);
    background-color: red;
}

@keyframes rotate {
    to {
        transform: rotate(360deg);
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
    },
    {
        id: 14,
        category: 'dots',
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
    position: relative;
    width: 3rem;
    aspect-ratio: 1;
    position: relative;
}

.loader span {
    position: absolute;
    left: 50%;
    bottom: 50%;
    width: 1rem;
    aspect-ratio: 1;
    border-radius: 50%;
    animation-duration: 1s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    background-color: #fff;
}

.loader span:nth-child(1) {
    transform: translate(-120%, 110%);
    transform-origin: right;
    animation-name: grow1;
}

.loader span:nth-child(2) {
    transform: translate(20%, 110%);
    transform-origin: left;
    animation-name: grow2;
}

.loader span:nth-child(3) {
    transform: translate(-50%, 0%);
    transform-origin: bottom;
    animation-name: grow3;
}

@keyframes grow1 {
    16.67% {
        transform: translate(-120%, 110%) scale(1.2);
    }

    33.33%,
    100% {
        transform: translate(-120%, 110%) scale(1);
    }
}

@keyframes grow2 {
    66.67% {
        transform: translate(20%, 110%) scale(1);
    }

    83.33% {
        transform: translate(20%, 110%) scale(1.2);
    }

    100% {
        transform: translate(20%, 110%) scale(1);
    }
}

@keyframes grow3 {
    33.33% {
        transform: translate(-50%, 0%) scale(1);
    }

    50% {
        transform: translate(-50%, 0%) scale(1.2);
    }

    66.67%,
    100% {
        transform: translate(-50%, 0%) scale(1);
    }
}
    `,
        component: <Loader14/>
    },
    {
        id: 15,
        category: 'rectangle',
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
    width: 3rem;
    aspect-ratio: 1;
    position: relative;
}

.loader span {
    position: absolute;
    width: 1rem;
    aspect-ratio: 1;
    background-color: #fff;
    border-radius: .1rem;
}

.loader span:nth-child(1) {
    left: 0;
    top: 0;
    transform: translate(45%, 45%);
    animation: rectangle1 2s ease-in-out infinite;
    transform-origin: right bottom;
}

.loader span:nth-child(2) {
    right: 0;
    top: 0;
    transform: translate(-45%, 45%);
    animation: rectangle2 2s ease-in-out infinite;
    transform-origin: left bottom;
}

.loader span:nth-child(3) {
    left: 0;
    bottom: 0;
    transform: translate(45%, -45%);
    animation: rectangle3 2s ease-in-out infinite;
    transform-origin: right top;
}

.loader span:nth-child(4) {
    right: 0;
    bottom: 0;
    transform: translate(-45%, -45%);
    animation: rectangle4 2s ease-in-out infinite;
    transform-origin: left top;
}

@keyframes rectangle1 {
    12.5% {
        transform: translate(45%, 45%) scale(1.3);
    }

    25% {
        transform: translate(45%, 45%) scale(1);
    }
}

@keyframes rectangle2 {
    25% {
        transform: translate(-45%, 45%) scale(1);
    }

    37.5% {
        transform: translate(-45%, 45%) scale(1.3);
    }

    50% {
        transform: translate(-45%, 45%) scale(1);
    }
}

@keyframes rectangle3 {
    50% {
        transform: translate(45%, -45%) scale(1);
    }

    62.5% {
        transform: translate(45%, -45%) scale(1.3);
    }

    75% {
        transform: translate(45%, -45%) scale(1);
    }
}

@keyframes rectangle4 {
    75% {
        transform: translate(-45%, -45%) scale(1);
    }

    87.5% {
        transform: translate(-45%, -45%) scale(1.3);
    }

    100% {
        transform: translate(-45%, -45%) scale(1);
    }
}
    `,
        component: <Loader15/>
    },
    {
        id: 16,
        category: 'bars',
        react:
`
<div className={styles['loader']}>
    <span></span>
    <span></span>
    <span></span>
</div>
    `,  
        css:
`
.loader {
    position: relative;
    width: 2rem;
    height: 3rem;
}

.loader span {
    position: absolute;
    width: .5rem;
    height: 0;
    background-color: #fff;
    border-top-left-radius: .1rem;
    border-top-right-radius: .1rem;
}

.loader span:nth-child(1) {
    left: 0;
    bottom: 0;
    animation: bar1 1s ease-in-out infinite;
}

.loader span:nth-child(2) {
    right: 0;
    bottom: 0;
    animation: bar2 1s ease-in-out infinite .2s;
}

.loader span:nth-child(3) {
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0);
    animation: bar3 1s ease-in-out infinite .1s;
}

@keyframes bar1 {
    50% {
        height: 80%;
    }

    100% {
        height: 0;
    }
}

@keyframes bar2 {
    50% {
        height: 80%;
    }

    100% {
        height: 0;
    }
}

@keyframes bar3 {
    50% {
        height: 80%;
    }

    100% {
        height: 0;
    }
}
    `,
        component: <Loader16/>
    },
    {
        id: 17,
        category: 'bars',
        react:
`
<div className='loader'>
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
    display: flex;
    flex-direction: row;
    align-items: end;
    justify-content: space-between;
}

.loader span {
    width: .5rem;
    background-color: #fff;
    bottom: 0;
    border-top-left-radius: .1rem;
    border-top-right-radius: .1rem;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-timing-function: ease;
}

.loader span:nth-child(1) {
    animation-name: grow1;
}

.loader span:nth-child(2) {
    animation-name: grow2;
}

.loader span:nth-child(3) {
    animation-name: grow3;
}

.loader span:nth-child(4) {
    animation-name: grow4;
}

.loader span:nth-child(5) {
    animation-name: grow5;
}

@keyframes grow1 {

    20%,
    100% {
        height: 20%;
    }
}

@keyframes grow2 {
    15% {
        height: 0;
    }

    30%,
    100% {
        height: 40%;
    }
}

@keyframes grow3 {
    30% {
        height: 0;
    }

    45%,
    100% {
        height: 60%;
    }
}

@keyframes grow4 {
    45% {
        height: 0;
    }

    60%,
    100% {
        height: 80%;
    }
}

@keyframes grow5 {
    60% {
        height: 0;
    }

    75%,
    100% {
        height: 100%;
    }
}
    `,
        component: <Loader17/>
    },
    {
        id: 18,
        category: 'bars',
        react:
`
<div className={styles['loader']}>
    <span></span>
</div>
    `,
        css:
`
.loader {
    width: 7rem;
    height: .8rem;
    background-color: #fffd;
    display: flex;
    flex-direction: row;
    justify-content: start;
    border-radius: .1rem;
    padding: .1rem;
}

.loader span {
    height: 100%;
    width: 0;
    background-color: red;
    animation: grow 2s ease-in-out infinite;
}

@keyframes grow {
    to {
        width: 100%;
    }
}
    `,
        component: <Loader18/>
    },
    {
        id: 19,
        category: 'bars',
        react:
`
<div className={styles['loader']}>
    <span></span>
    <span></span>
    <span></span>
</div>
    `,
        css:
`
.loader {
    width: 2.5rem;
    aspect-ratio: 1;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: end;
}

.loader span {
    width: .6rem;
    height: 10%;
    background-color: #fff;
    border-top-left-radius: .1rem;
    border-top-right-radius: .1rem;
    animation: grow .5s ease-in-out infinite;
}

@keyframes grow {
    50% {
        height: 100%;
    }
}
    `,
        component: <Loader19/>
    },
    {
        id: 20,
        category: 'circle',
        react:
`
<div className='loader'>
    <div className='circle1'>
        <div className='bar1'>
            <div className='bar2'></div>
        </div>
        <div className='circle2'></div>
    </div>
</div>
    `,
        css:
`
.loader {
    width: 3.5rem;
    aspect-ratio: 1;
    background-color: #fff;
    border-radius: .5rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.circle1 {
    position: relative;
    width: 80%;
    aspect-ratio: 1;
    background-color: red;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: rotate 2s ease-in-out infinite;
}

.circle2 {
    width: 70%;
    aspect-ratio: 1;
    border-radius: 50%;
    background-color: #fff;
}

.bar1 {
    position: absolute;
    width: 100%;
    height: 30%;
    background-color: #fff;
    left: 0;
    top: 50%;
    transform: translate(0, -50%);
    display: flex;
    justify-content: start;
    align-items: center;
}

.bar2 {
    width: 0;
    height: 50%;
    background-color: red;
    animation: bar2 2s ease-in-out infinite;
}

@keyframes rotate {

    50%,
    100% {
        transform: rotate(360deg);
    }
}

@keyframes bar2 {
    50% {
        width: 0;
    }

    100% {
        width: 85%;
    }
}
    `,
        component: <Loader20/>
    },
    {
        id: 21,
        category: 'dots',
        react:
`
<div className={styles['loader']}>
    <div className={styles['dot']}></div>
    <div className={styles['bar']}></div>
</div>
    `,
        css:
`
.loader {
    position: relative;
    width: 1.5rem;
    height: 4rem;
    display: flex;
    align-items: end;
}

.bar {
    height: 10%;
    width: 100%;
    background-color: red;
    border-radius: .1rem;
}

.dot {
    position: absolute;
    width: 1rem;
    aspect-ratio: 1;
    border-radius: 50%;
    background-color: #fff;
    left: 50%;
    bottom: 10%;
    transform: translate(-50%, 0);
    animation: bouncing 1s ease-in-out infinite;
}

@keyframes bouncing {
    50% {
        transform: translateX(-50%) translateY(-50px);
    }

    100% {
        transform: translateX(-50%) translateY(0) scaleY(0.9) scaleX(1.05);
    }
}
    `,
        component: <Loader21/>
    },
    {
        id: 22,
        category: 'rectangle',
        react:
`
<div className='loader'></div>
    `,
        css:
`
.loader {
    width: 0rem;
    aspect-ratio: 1;
    outline-width: 0;
    outline-color: #fff;
    outline-style: solid;
    outline-offset: -.2rem;
    opacity: 0;
    animation: loader .6s linear infinite;
}

@keyframes loader {
    to {
        opacity: 1;
        width: 2rem;
        outline-width: .2rem;
    }
}
    `,
        component: <Loader22/>
    }
]

export default LoadersData