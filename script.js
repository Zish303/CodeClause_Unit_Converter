lengthFromUnit = document.getElementById("length-from-unit");
lengthFromValue = document.getElementById("length-from-value");
lengthToUnit = document.getElementById("length-to-unit");
lengthToValue = document.getElementById("length-to-value");

weightFromUnit = document.getElementById("weight-from-unit");
weightFromValue = document.getElementById("weight-from-value");
weightToUnit = document.getElementById("weight-to-unit");
weightToValue = document.getElementById("weight-to-value");

temperatureFromUnit = document.getElementById("temperature-from-unit");
temperatureFromValue = document.getElementById("temperature-from-value");
temperatureToUnit = document.getElementById("temperature-to-unit");
temperatureToValue = document.getElementById("temperature-to-value");

speedFromUnit = document.getElementById("speed-from-unit");
speedFromValue = document.getElementById("speed-from-value");
speedToUnit = document.getElementById("speed-to-unit");
speedToValue = document.getElementById("speed-to-value");

timeFromUnit = document.getElementById("time-from-unit");
timeFromValue = document.getElementById("time-from-value");
timeToUnit = document.getElementById("time-to-unit");
timeToValue = document.getElementById("time-to-value");

powerFromUnit = document.getElementById("power-from-unit");
powerFromValue = document.getElementById("power-from-value");
powerToUnit = document.getElementById("power-to-unit");
powerToValue = document.getElementById("power-to-value");

function convertLength() {
  if (lengthFromUnit.value == "mm") {
    if (lengthToUnit.value == "mm") {
      lengthToValue.value = "Lol";
    }
    if (lengthToUnit.value == "cm") {
      lengthToValue.value = lengthFromValue.value / 10;
    }
    if (lengthToUnit.value == "inch") {
      lengthToValue.value = lengthFromValue.value / 25.4;
    }
    if (lengthToUnit.value == "foot") {
      lengthToValue.value = lengthFromValue.value / 305;
    }
    if (lengthToUnit.value == "meter") {
      lengthToValue.value = lengthFromValue.value / 1000;
    }
    if (lengthToUnit.value == "km") {
      lengthToValue.value = lengthFromValue.value / 1e6;
    }
    if (lengthToUnit.value == "mile") {
      lengthToValue.value = lengthFromValue.value / 1.609e6;
    }
  }
  if (lengthFromUnit.value == "cm") {
    if (lengthToUnit.value == "mm") {
      lengthToValue.value = lengthFromValue.value * 10;
    }
    if (lengthToUnit.value == "cm") {
      lengthToValue.value = "Lol";
    }
    if (lengthToUnit.value == "inch") {
      lengthToValue.value = lengthFromValue.value / 2.54;
    }
    if (lengthToUnit.value == "foot") {
      lengthToValue.value = lengthFromValue.value / 30.48;
    }
    if (lengthToUnit.value == "meter") {
      lengthToValue.value = lengthFromValue.value / 100;
    }
    if (lengthToUnit.value == "km") {
      lengthToValue.value = lengthFromValue.value / 100000;
    }
    if (lengthToUnit.value == "mile") {
      lengthToValue.value = lengthFromValue.value / 160934;
    }
  }
  if (lengthFromUnit.value == "inch") {
    if (lengthToUnit.value == "mm") {
      lengthToValue.value = lengthFromValue.value * 25.4;
    }
    if (lengthToUnit.value == "cm") {
      lengthToValue.value = lengthFromValue.value * 2.54;
    }
    if (lengthToUnit.value == "inch") {
      lengthToValue.value = "Lol";
    }
    if (lengthToUnit.value == "foot") {
      lengthToValue.value = lengthFromValue.value / 12;
    }
    if (lengthToUnit.value == "meter") {
      lengthToValue.value = lengthFromValue.value / 39.37;
    }
    if (lengthToUnit.value == "km") {
      lengthToValue.value = lengthFromValue.value / 39370;
    }
    if (lengthToUnit.value == "mile") {
      lengthToValue.value = lengthFromValue.value / 63360;
    }
  }
  if (lengthFromUnit.value == "foot") {
    if (lengthToUnit.value == "mm") {
      lengthToValue.value = lengthFromValue.value * 305;
    }
    if (lengthToUnit.value == "cm") {
      lengthToValue.value = lengthFromValue.value * 30.48;
    }
    if (lengthToUnit.value == "inch") {
      lengthToValue.value = lengthFromValue.value * 12;
    }
    if (lengthToUnit.value == "foot") {
      lengthToValue.value = "Lol";
    }
    if (lengthToUnit.value == "meter") {
      lengthToValue.value = lengthFromValue.value / 3.281;
    }
    if (lengthToUnit.value == "km") {
      lengthToValue.value = lengthFromValue.value / 3281;
    }
    if (lengthToUnit.value == "mile") {
      lengthToValue.value = lengthFromValue.value / 5280;
    }
  }
  if (lengthFromUnit.value == "meter") {
    if (lengthToUnit.value == "mm") {
      lengthToValue.value = lengthFromValue.value * 1000;
    }
    if (lengthToUnit.value == "cm") {
      lengthToValue.value = lengthFromValue.value * 100;
    }
    if (lengthToUnit.value == "inch") {
      lengthToValue.value = lengthFromValue.value * 39.37;
    }
    if (lengthToUnit.value == "foot") {
      lengthToValue.value = lengthFromValue.value * 3.281;
    }
    if (lengthToUnit.value == "meter") {
      lengthToValue.value = "Lol";
    }
    if (lengthToUnit.value == "km") {
      lengthToValue.value = lengthFromValue.value / 1000;
    }
    if (lengthToUnit.value == "mile") {
      lengthToValue.value = lengthFromValue.value / 1609;
    }
  }
  if (lengthFromUnit.value == "km") {
    if (lengthToUnit.value == "mm") {
      lengthToValue.value = lengthFromValue.value * 1e6;
    }
    if (lengthToUnit.value == "cm") {
      lengthToValue.value = lengthFromValue.value * 100000;
    }
    if (lengthToUnit.value == "inch") {
      lengthToValue.value = lengthFromValue.value * 39370;
    }
    if (lengthToUnit.value == "foot") {
      lengthToValue.value = lengthFromValue.value * 3281;
    }
    if (lengthToUnit.value == "meter") {
      lengthToValue.value = lengthFromValue.value * 1000;
    }
    if (lengthToUnit.value == "km") {
      lengthToValue.value = "Lol";
    }
    if (lengthToUnit.value == "mile") {
      lengthToValue.value = lengthFromValue.value / 1.609;
    }
  }
}

function convertWeight() {
  if (weightFromUnit.value == "grain") {
    if (weightToUnit.value == "grain") {
      weightToValue.value = "Lol";
    }
    if (weightToUnit.value == "gram") {
      weightToValue.value = weightFromValue.value / 15.432;
    }
    if (weightToUnit.value == "ounce") {
      weightToValue.value = weightFromValue.value / 438;
    }
    if (weightToUnit.value == "pound") {
      weightToValue.value = weightFromValue.value / 7000;
    }
    if (weightToUnit.value == "kg") {
      weightToValue.value = weightFromValue.value / 15432;
    }
    if (weightToUnit.value == "stone") {
      weightToValue.value = weightFromValue.value / 98000;
    }
  }
  if (weightFromUnit.value == "gram") {
    if (weightToUnit.value == "grain") {
      weightToValue.value = weightFromValue.value * 15.432;
    }
    if (weightToUnit.value == "gram") {
      weightToValue.value = "Lol";
    }
    if (weightToUnit.value == "ounce") {
      weightToValue.value = weightFromValue.value / 28.35;
    }
    if (weightToUnit.value == "pound") {
      weightToValue.value = weightFromValue.value / 454;
    }
    if (weightToUnit.value == "kg") {
      weightToValue.value = weightFromValue.value / 1000;
    }
    if (weightToUnit.value == "stone") {
      weightToValue.value = weightFromValue.value / 6350;
    }
  }
  if (weightFromUnit.value == "ounce") {
    if (weightToUnit.value == "grain") {
      weightToValue.value = weightFromValue.value * 438;
    }
    if (weightToUnit.value == "gram") {
      weightToValue.value = weightFromValue.value * 28.35;
    }
    if (weightToUnit.value == "ounce") {
      weightToValue.value = "Lol";
    }
    if (weightToUnit.value == "pound") {
      lweightToValue.value = weightFromValue.value / 16;
    }
    if (weightToUnit.value == "kg") {
      weightToValue.value = weightFromValue.value / 35.274;
    }
    if (weightToUnit.value == "stone") {
      weightToValue.value = weightFromValue.value / 224;
    }
  }
  if (weightFromUnit.value == "pound") {
    if (weightToUnit.value == "grain") {
      weightToValue.value = weightFromValue.value * 7000;
    }
    if (weightToUnit.value == "gram") {
      weightToValue.value = weightFromValue.value * 454;
    }
    if (weightToUnit.value == "ounce") {
      weightToValue.value = weightFromValue.value * 16;
    }
    if (weightToUnit.value == "pound") {
      weightToValue.value = "Lol";
    }
    if (weightToUnit.value == "kg") {
      weightToValue.value = weightFromValue.value / 2.205;
    }
    if (weightToUnit.value == "stone") {
      weightToValue.value = weightFromValue.value / 14;
    }
  }
  if (weightFromUnit.value == "kg") {
    if (weightToUnit.value == "grain") {
      weightToValue.value = weightFromValue.value * 15432;
    }
    if (weightToUnit.value == "gram") {
      weightToValue.value = weightFromValue.value * 1000;
    }
    if (weightToUnit.value == "ounce") {
      weightToValue.value = weightFromValue.value * 35.274;
    }
    if (weightToUnit.value == "pound") {
      weightToValue.value = weightFromValue.value * 2.205;
    }
    if (weightToUnit.value == "kg") {
      weightToValue.value = "Lol";
    }
    if (weightToUnit.value == "stone") {
      weightToValue.value = weightFromValue.value / 6.35;
    }
  }
  if (weightFromUnit.value == "stone") {
    if (weightToUnit.value == "grain") {
      weightToValue.value = weightFromValue.value * 98000;
    }
    if (weightToUnit.value == "gram") {
      weightToValue.value = weightFromValue.value * 6350;
    }
    if (weightToUnit.value == "ounce") {
      weightToValue.value = weightFromValue.value * 224;
    }
    if (weightToUnit.value == "pound") {
      weightToValue.value = weightFromValue.value * 14;
    }
    if (weightToUnit.value == "kg") {
      weightToValue.value = weightFromValue.value * 6.35;
    }
    if (weightToUnit.value == "stone") {
      weightToValue.value = "Lol";
    }
  }
}

function convertTemperature() {
  if (temperatureFromUnit.value == "centigrade") {
    if (temperatureToUnit.value == "centigrade") {
      temperatureToValue.value = "Lol";
    }
    if (temperatureToUnit.value == "fahrenheit") {
      temperatureToValue.value = (temperatureFromValue.value * 9) / 5 + 32;
    }
    if (temperatureToUnit.value == "kelvin") {
      temperatureToValue.value = temperatureFromValue.value + 273.15;
    }
    if (temperatureToUnit.value == "rankine") {
      temperatureToValue.value = (temperatureFromValue.value * 9) / 5 + 491.67;
    }
  }
  if (temperatureFromUnit.value == "fahrenheit") {
    if (temperatureToUnit.value == "centigrade") {
      temperatureToValue.value = ((temperatureFromValue.value - 32) * 5) / 9;
    }
    if (temperatureToUnit.value == "fahrenheit") {
      temperatureToValue.value = "Lol";
    }
    if (temperatureToUnit.value == "kelvin") {
      temperatureToValue.value =
        ((temperatureFromValue.value - 32) * 5) / 9 + 273.15;
    }
    if (temperatureToUnit.value == "rankine") {
      temperatureToValue.value = temperatureFromValue.value + 459.67;
    }
  }
  if (temperatureFromUnit.value == "kelvin") {
    if (temperatureToUnit.value == "centigrade") {
      temperatureToValue.value = temperatureFromValue.value - 273.15;
    }
    if (temperatureToUnit.value == "fahrenheit") {
      temperatureToValue.value =
        ((temperatureFromValue.value - 273.15) * 9) / 5 + 32;
    }
    if (temperatureToUnit.value == "kelvin") {
      temperatureToValue.value = "Lol";
    }
    if (temperatureToUnit.value == "rankine") {
      temperatureToValue.value = (temperatureFromValue.value * 9) / 5;
    }
  }
  if (temperatureFromUnit.value == "rankine") {
    if (temperatureToUnit.value == "centigrade") {
      temperatureToValue.value =
        ((temperatureFromValue.value - 491.67) * 5) / 9;
    }
    if (temperatureToUnit.value == "fahrenheit") {
      temperatureToValue.value = temperatureFromValue.value - 459.67;
    }
    if (temperatureToUnit.value == "kelvin") {
      temperatureToValue.value = (temperatureFromValue.value * 5) / 9;
    }
    if (temperatureToUnit.value == "rankine") {
      temperatureToValue.value = "Lol";
    }
  }
}

function convertSpeed() {
  if (speedFromUnit.value == "fts") {
    if (speedToUnit.value == "fts") {
      speedToValue.value = "Lol";
    }
    if (speedToUnit.value == "ms") {
      speedToValue.value = speedFromValue.value / 3.281;
    }
    if (speedToUnit.value == "kmh") {
      speedToValue.value = speedFromValue.value / 1.097;
    }
    if (speedToUnit.value == "mih") {
      speedToValue.value = speedFromValue.value / 1.467;
    }
    if (speedToUnit.value == "knots") {
      speedToValue.value = speedFromValue.value / 1.688;
    }
    if (speedToUnit.value == "lightspeed") {
      speedToValue.value = speedFromValue.value / 9.836e8;
    }
  }
  if (speedFromUnit.value == "ms") {
    if (speedToUnit.value == "fts") {
      speedToValue.value = speedFromValue.value * 3.281;
    }
    if (speedToUnit.value == "ms") {
      speedToValue.value = "Lol";
    }
    if (speedToUnit.value == "kmh") {
      speedToValue.value = speedFromValue.value * 3.6;
    }
    if (speedToUnit.value == "mih") {
      speedToValue.value = speedFromValue.value * 2.237;
    }
    if (speedToUnit.value == "knots") {
      speedToValue.value = speedFromValue.value * 1.944;
    }
    if (speedToUnit.value == "lightspeed") {
      speedToValue.value = speedFromValue.value / 2.998e8;
    }
  }
  if (speedFromUnit.value == "kmh") {
    if (speedToUnit.value == "fts") {
      speedToValue.value = speedFromValue.value / 1.097;
    }
    if (speedToUnit.value == "ms") {
      speedToValue.value = speedFromValue.value / 3.6;
    }
    if (speedToUnit.value == "kmh") {
      speedToValue.value = "Lol";
    }
    if (speedToUnit.value == "mih") {
      speedToValue.value = speedFromValue.value / 1.609;
    }
    if (speedToUnit.value == "knots") {
      speedToValue.value = speedFromValue.value / 1.852;
    }
    if (speedToUnit.value == "lightspeed") {
      speedToValue.value = speedFromValue.value / 1.079e9;
    }
  }
  if (speedFromUnit.value == "mih") {
    if (speedToUnit.value == "fts") {
      speedToValue.value = speedFromValue.value * 1.467;
    }
    if (speedToUnit.value == "ms") {
      speedToValue.value = speedFromValue.value / 2.237;
    }
    if (speedToUnit.value == "kmh") {
      speedToValue.value = speedFromValue.value * 1.609;
    }
    if (speedToUnit.value == "mih") {
      speedToValue.value = "Lol";
    }
    if (speedToUnit.value == "knots") {
      speedToValue.value = speedFromValue.value / 1.151;
    }
    if (speedToUnit.value == "lightspeed") {
      speedToValue.value = speedFromValue.value / 6.706e8;
    }
  }
  if (speedFromUnit.value == "knots") {
    if (speedToUnit.value == "fts") {
      speedToValue.value = speedFromValue.value * 1.688;
    }
    if (speedToUnit.value == "ms") {
      speedToValue.value = speedFromValue.value * 1.944;
    }
    if (speedToUnit.value == "kmh") {
      speedToValue.value = speedFromValue.value * 1.852;
    }
    if (speedToUnit.value == "mih") {
      speedToValue.value = speedFromValue.value * 1.151;
    }
    if (speedToUnit.value == "knots") {
      speedToValue.value = "Lol";
    }
    if (speedToUnit.value == "lightspeed") {
      speedToValue.value = speedFromValue.value / 5.827e8;
    }
  }
  if (speedFromUnit.value == "lightspeed") {
    if (speedToUnit.value == "fts") {
      speedToValue.value = speedFromValue.value * 9.836e8;
    }
    if (speedToUnit.value == "ms") {
      speedToValue.value = speedFromValue.value * 2.998e8;
    }
    if (speedToUnit.value == "kmh") {
      speedToValue.value = speedFromValue.value * 1.079e9;
    }
    if (speedToUnit.value == "mih") {
      speedToValue.value = speedFromValue.value * 6.706e8;
    }
    if (speedToUnit.value == "knots") {
      speedToValue.value = speedFromValue.value * 5.827e8;
    }
    if (speedToUnit.value == "lightspeed") {
      speedToValue.value = "Lol";
    }
  }
}

function convertTime() {
  temp = 0.0;
  if (timeFromUnit.value == "sec") {
    temp = timeFromValue.value;
  }
  if (timeFromUnit.value == "min") {
    temp = timeFromValue.value * 60;
  }
  if (timeFromUnit.value == "hr") {
    temp = timeFromValue.value * 3600;
  }
  if (timeFromUnit.value == "dy") {
    temp = timeFromValue.value * 3600 * 24;
  }
  if (timeFromUnit.value == "yr") {
    temp = timeFromValue.value * 3600 * 24 * 365;
  }
  if (timeToUnit.value == "sec") {
    timeToValue.value = temp;
  }
  if (timeToUnit.value == "min") {
    timeToValue.value = temp / 60;
  }
  if (timeToUnit.value == "hr") {
    timeToValue.value = temp / 3600;
  }
  if (timeToUnit.value == "dy") {
    timeToValue.value = temp / (3600 * 24);
  }
  if (timeToUnit.value == "yr") {
    timeToValue.value = temp / (3600 * 24 * 365);
  }
}

function convertPower() {
  temp = 0.0;
  if (powerFromUnit.value == "wt") {
    temp = powerFromValue.value;
  }
  if (powerFromUnit.value == "kwt") {
    temp = powerFromValue.value * 1000;
  }
  if (powerFromUnit.value == "hp") {
    temp = powerFromValue.value * 745.699;
  }
  if (powerToUnit.value == "wt") {
    powerToValue.value = temp;
  }
  if (powerToUnit.value == "kwt") {
    powerToValue.value = temp / 1000;
  }
  if (powerToUnit.value == "hp") {
    powerToValue.value = temp / 745.699;
  }
}
