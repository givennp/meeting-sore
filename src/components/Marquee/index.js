import Image from "next/image";
import client from "../../../public/marqueeContent.jpg";

const Marquee = () => {
    return (
      <>
        <div>TRUSTED BY</div>
        <div>
          <Image src={client} />
        </div>
      </>
    );
}


export default Marquee;