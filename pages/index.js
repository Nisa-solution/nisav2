import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="container-lg my-5">
      <div className="row py-5 px-3 justify-content-center">
        <div className="col-12 col-md-7 text-center text-md-start">
          <h1 className="display-1 fw-bold text-primary">
            Nisa, eNaira automated Credit system
          </h1>
          <p className="lead my-4 text-muted">
            Building credit would citizen using eNaira
          </p>
          {/* <Link href="/login">
            <button className="btn btn-secondary btn-lg">Login</button>
          </Link> */}
          <Link href="/get-started">
            <button className="btn btn-secondary btn-lg">Get Started</button>
          </Link>
        </div>
        <div className="col-12 col-md-5 justify-items-center my-4">
          <Image
            src="/11.gif"
            alt="Display Image"
            width={500}
            height={350}
          ></Image>
        </div>
      </div>
    </div>
  );
}
