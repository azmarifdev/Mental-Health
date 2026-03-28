const Heading = ({title, clases = ""}) => {
    return (
        <h2 className={`text-3xl font-semibold text-gray-200 ${clases}`}>
            {title}
        </h2>
    );
};

export default Heading;
