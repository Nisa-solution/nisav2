import Link from "next/link";
import Image from "next/image";

const transfer = () => {
  return (
    <div className="container py-4 bg-light">
      {/* <div className="row justify-content-center my-5">
        <div className="col-lg-10 my-5 bg-white p-5">
                <Image
                  src="/ng-flag.png" className="img-fluid"
                  alt="Nigeria"
                  width="300"
                  height="200"
                />
          
        </div>
      </div> */}
      <Image src="/Desktop.png" alt="" className="img-fluid" width={1440} height={969}/>
    </div>
  );
};

export default transfer;
