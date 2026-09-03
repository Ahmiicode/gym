import {motion} from "framer-motion";


export default function Loader(){


return(

<div className="
fixed inset-0
bg-black
flex items-center
justify-center
z-[100]
">


<motion.h1

animate={{
scale:[1,1.2,1]
}}

transition={{
repeat:Infinity,
duration:1
}}

className="
text-4xl
font-bold
text-yellow-500
"

>
LUXE
</motion.h1>


</div>


)

}