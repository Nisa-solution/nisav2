import Link from "next/link";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();
  const submitHandler = (e) => {
    e.preventDefault();
    setTimeout(() => {
      router.push("/sign_up");
    }, 1000);
  };
  return (
    <div className="container py-4 bg-light">
      <div className="row justify-content-center my-5">
        <div className="col-lg-5 my-5 bg-white p-5 shadow">
        <h3 className="pb-2 fw-bold text-center">Individual</h3>
          <form className="loginForm" onSubmit={submitHandler}>
            {/* <img className="text-center img-fluid mb-3" src="/e-naira.jpg" alt="" /> */}
            
            <p className="text-center mt-4">Individuals with user eNaria account. </p>

            <div className="text-center mt-4 px-5">
              <button type="submit" className="btn btn-secondary px-5 py-2">
              Register
              </button>
            </div>
          </form>
          <p className="text-center mt-4">
            Already have an account? <Link href="/login">Login Up</Link>
          </p>
        </div>

        <div className="col-lg-1"></div>
        <div className="col-lg-5 my-5 bg-white p-5 shadow">
          <h3 className="pb-2 fw-bold text-center">Start-up/SME</h3>
          <form className="loginForm" onSubmit={submitHandler}>
            {/* <img className="text-center img-fluid mb-3" src="/e-naira.jpg" alt="" /> */}
            
            <p className="text-center mt-4">Small and medium-sized enterprises (SMEs) 
or small and medium-sized businesses (SMBs) 
are businesses whose personnel numbers fall
 below certain limits. </p>

            <div className="text-center mt-4 px-5">
              <button type="submit" className="btn btn-secondary px-5 py-2">
              Register
              </button>
            </div>
          </form>
          <p className="text-center mt-4">
            Already have an account? <Link href="/login">Login Up</Link>
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default Login;
