import useLogin from "../hooks/useLogin"

const LeftHeader : React.FC = () => {
    const isLogin = useLogin();

    isLogin && (
        <div className="flex">
            <button>Login</button>
            <button>Login</button>
        </div>
    )

    return <></>
}


export default LeftHeader