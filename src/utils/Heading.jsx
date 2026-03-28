const Heading = ({title, clases = ""}) => {
    return (
        <div className="mb-8 text-center md:text-left">
            <h2
                className={`text-3xl font-bold tracking-tight text-white md:text-4xl ${clases}`}>
                {title}
            </h2>
            <div className="mt-3 h-1 w-20 rounded-full bg-gradient-to-r from-sky-400 to-emerald-300 md:ml-0 mx-auto" />
        </div>
    );
};

export default Heading;
