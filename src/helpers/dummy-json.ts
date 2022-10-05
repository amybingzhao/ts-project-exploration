export function dummy_result(){

    setTimeout(async () => {
        let dataGenerator = await import("dummy-data-generator");
        
        console.log(
            dataGenerator({
                count: 1,                         // Number of "words" or "paragraph"
                columnData: {
                    "required-column-name-one":{  // Required Column Name as string
                        type:"word",              // Type of column => "word" || "paragraph"
                        length:10
                    },
                    "required-column-name-two":{
                        type:"word",
                        length: 10
                    },
                    // "required-column-name-two":{
                    //     type:"enum",
                    //     value:["high","low"]
                    // }
                },
                isCSV: true,                      // if true will return output as CSV string
            })
        )
    }, 5000)
}