

const invokedFunction = () => {
    let marks=80;
    return (
        <div>
            {(()=>{
                if (if marks>80 && marks<100) {
                    return <h1>A+</h1>
                }
                else if (marks>100 && marks<60){
                    return <h2>A-</h2>

                }
                else{
                    return <h1>F</h1>
                }

            })}

           

        </div>
    );
};

export default invokedFunction;