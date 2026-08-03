import { useGoogleLogin } from "@react-oauth/google";

const GoogleButton = (props) => {
  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      console.log(tokenResponse);
    },
    onError: () => {
      console.log("Login Failed");
    },
  });

  return (
    <button
      onClick={() => login()}
      className="w-full flex items-center justify-center gap-3 rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl px-5 py-2 text-white transition-all duration-300 hover:bg-white/20 active:scale-[0.98]">
      <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" className="h-5 w-5" />
      <span className="font-medium">{props.method}</span>
    </button>
  );
};

export default GoogleButton;