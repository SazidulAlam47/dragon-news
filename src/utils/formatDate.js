function formatDate(inputDate) {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    // Parse the input date string into a JavaScript Date object
    const date = new Date(inputDate);

    // Extract the components of the date
    const year = date.getFullYear();
    const monthIndex = date.getMonth();
    const day = date.getDate();

    // Format the date into the desired format
    const formattedDate = `${months[monthIndex]} ${day}, ${year}`;

    return formattedDate;
}

export default formatDate;
