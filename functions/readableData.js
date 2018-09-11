export default function(ISOdate) {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        readableDate = new Date(ISOdate),
        dateString = `Le ${readableDate.getDay()} ${months[readableDate.getMonth()]} ${readableDate.getFullYear()}`;

        return dateString;
};