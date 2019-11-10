var count = 5;

while (count <= 50) {
    if ((count % 5 && count % 3) == 0) {
        console.log(count);
    }
    count++;
}