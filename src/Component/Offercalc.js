export const Calculation = (foodlist) => {
    const bread = foodlist[0];
    const cheese = foodlist[2];
    const soup = foodlist[3];
    const butter = foodlist[4];

    var br_offer = 0,
        ch_offer = 0,
        bu_offer = 0,
        totel_offer = 0,
        i_totel = 0,
        totel = 0;
    // offer logic add below

    if (soup.qty != 0 && bread.qty != 0) {
        br_offer = parseFloat(((bread.qty / 2) * bread.price).toFixed(2));
        totel_offer += br_offer;
    }
    if (cheese.qty != 0) {
        ch_offer = parseFloat((Math.floor(cheese.qty / 2) * cheese.price).toFixed(2));
        totel_offer += ch_offer;
    }
    if (butter.qty) {
        bu_offer = parseFloat(((butter.qty / 3) * butter.price).toFixed(2));
        totel_offer += bu_offer;
    }
    butter["offer"] = (bu_offer);
    cheese["offer"] = (ch_offer);
    bread["offer"] = (br_offer);
    //  offer logic add above

    // Don't touch here , this overall bill Totel 
    var mapped = foodlist.slice(0, foodlist.length - 1)
    mapped.forEach((food) => {
        return (
            i_totel = parseFloat((food.qty * food.price).toFixed(2)),
            food["totel"] = i_totel,
            totel += i_totel
        )
    }, )

    foodlist[foodlist.length - 1]["totel_price"] = parseFloat((totel).toFixed(2));
    foodlist[foodlist.length - 1]["discount"] = parseFloat((totel_offer).toFixed(2));
    foodlist[foodlist.length - 1]["totel"] = parseFloat((totel - totel_offer).toFixed(2))

    //Don't touch above , this overall bill Totel 
};