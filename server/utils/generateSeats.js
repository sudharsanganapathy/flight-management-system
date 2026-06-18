const generateSeats = () => {

    let seats=[];


    const rows=[
        "A","B","C","D","E","F"
    ];


    rows.forEach(row=>{

        for(let i=1;i<=30;i++){

            seats.push({

                seatNumber:`${row}${i}`,
                status:"available"

            });

        }

    });


    return seats;

};


module.exports = generateSeats;