export class weatherObj {
  constructor (
    address,
    temp,
    tempMin,
    tempMax,
    humidity,
    precip,
    precipProb,
    feelsLike,
    icon,
    windSpeed,
    conditions,
    description
  ) {
    this.address = address;
    this.temp = temp;
    this.tempMin = tempMin;
    this.tempMax = tempMax;
    this.humidity = humidity;
    this.precip = precip;
    this.precipProb = precipProb;
    this.feelsLike = feelsLike;
    this.icon = icon;
    this.windSpeed = windSpeed;
    this.conditions = conditions;
    this.description = description;
  }
}
