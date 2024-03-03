

const InsideLoop = () => {
    let city = ['Dhaka', 'Rajshahi', 'Chittagong'];
    return (
        <div>
           <ul>
                {city.map((item, i) => {
                    return <li key={i.toString()}>{item}</li>;
                })}
            </ul>

        </div>
    );
};

export default InsideLoop;
