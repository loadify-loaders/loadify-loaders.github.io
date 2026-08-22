import Loader1 from '../Components/Loaders/Loader1/Loader'
import Loader2 from '../Components/Loaders/Loader2/Loader'
import Loader3 from '../Components/Loaders/Loader3/Loader'
import Loader4 from '../Components/Loaders/Loader4/Loader'
import Loader5 from '../Components/Loaders/Loader5/Loader'

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
        category: 'circle',
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
        category: 'circle',
        react: 
`
<div className={styles['loader']}>
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
}

.loader span:nth-child(1) {
    animation: slide 1s linear infinite;
}

.loader span:nth-child(2) {
    animation: slide 1s linear infinite .2s;
}

.loader span:nth-child(3) {
    animation: slide 1s linear infinite .4s;
}

.loader span:nth-child(4) {
    animation: slide 1s linear infinite .6s;
}

.loader span:nth-child(5) {
    animation: slide 1s linear infinite .8s;
}

.loader span:nth-child(6) {
    animation: slide 1s linear infinite 1s;
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
    }
]

export default LoadersData