import Loader1 from '../Components/Loaders/Loader1/Loader'
import Loader2 from '../Components/Loaders/Loader2/Loader'

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
    width: 3.5rem;
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
    }
]

export default LoadersData