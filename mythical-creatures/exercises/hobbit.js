class Hobbit{
  constructor(params){
    this.name = params.name;
    this.age = params.age || 0;
    this.adult = false;
    this.old = false;
    this.hasRing = false;
  }

  celebrateBirthday(){
    this.age++;
    if(this.age > 100){
      this.old = true;
    } else if(this.age > 32){
      this.adult = true;
    }
  }

  getRing(){
    var output = ""
    if(this.name == "Frodo"){
      output = "Here is the ring!"
      this.hasRing = true;
    } else {
      output = "You can't have it!"
    }
    return output
  }

}

module.exports = Hobbit;
