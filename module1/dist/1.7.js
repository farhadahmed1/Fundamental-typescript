"use strict";
{
    // destructuring
    // spread operator
    const friend1 = ["abul", "kabuil", "jabul"];
    const friend2 = ["babul", "habib", "rifat"];
    friend1.push(...friend2);
    const mentors1 = {
        javascript: "Baki",
        C: "Zahid",
    };
    const mentors2 = {
        python: "Baki",
        typScript: "Billa",
    };
    const mentors = Object.assign(Object.assign({}, mentors1), mentors2);
    console.log(mentors);
    // rest operator
    const getfriends = (...friends) => {
        friends.forEach((friend) => console.log(`all friend  ${friend}`));
    };
    getfriends("abul", "kabuil", "jabul", "rifat");
}
