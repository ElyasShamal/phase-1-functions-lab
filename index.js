// Code your solution in this file!

function distanceFromHqInBlocks(distance){
    const hq = 42;
    return Math.abs(distance - hq);
}

function distanceFromHqInFeet(distance){
    return distanceFromHqInBlocks(distance) * 264;
}

function distanceTravelledInFeet(start, distination){
    return Math.abs(start - distination) * 264;
}

function calculatesFarePrice(start, distination){
    const distance = distanceTravelledInFeet(start, distination);
    if (distance <= 400){
        return 0;
    }else if(distance > 400 && distance <= 2000){
        return (distance - 400) * 0.02;
    }else if (distance > 2000 && distance <= 2500){
        return 25;
    }else{
        return 'cannot travel that far';
    }
}