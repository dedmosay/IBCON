import React, { useRef, useState } from 'react'
import { useFBX } from "@react-three/drei";

const Model = (props) => {
    const fbx = useFBX(props.url);
    const mesh = useRef()
    const [active, setActive] = useState(false)
    return (
        <mesh
            {...props}
            ref={mesh}
            rotation={[Math.PI / -2, 0, 0]}
            position={active ? [0, 0, 0] : [0, 1, 0]}
            onClick={(event) => setActive(!active)}
        >
            <primitive object={fbx} scale={0.02} />
        </mesh>
    );
};

export default Model;
