interface PreProps {
  load: boolean;
}

const Pre: React.FC<PreProps> = ({ load }) => {
  return <div id={load ? "preloader" : "preloader-none"} />;
};

export default Pre;
