class weatherObj {
  constructor(
    address,
    temp,
    tempMin,
    tempMax,
    humidity,
    precip,
    precipProb,
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
    this.icon = icon;
    this.windSpeed = windSpeed;
    this.conditions = conditions;
    this.description = description;
  }
}
