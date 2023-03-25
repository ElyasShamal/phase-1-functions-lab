// Code your solution in this file!

function distanceFromHqInBlocks(blocks){
    return Math.abs(blocks - 42);
}

function distanceFromHqInFeet(feet){
    return distanceFromHqInBlocks(feet) *264 ;
}


function distanceTravelledInFeet (startPoint , endPoint){
    return Math.abs((startPoint - endPoint) * 264);
}


function calculatesFarePrice (startpoint, endPoint){
    let distanceTravel = distanceTravelledInFeet(startpoint, endPoint)

    if(distanceTravel > 2500){
        return "cannot travel that far";
    }

    else if(distanceTravel > 2000){
        return 25;
    }
    
    else if(distanceTravel > 400){
        return (distanceTravel - 400) * 0.02;
    }

    else{
        return 0;
    }
    
}