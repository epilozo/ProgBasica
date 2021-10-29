int amarillo = 13;
int rojo     = 7;
int milisegundo = 300;

void setup() {
  // put your setup code here, to run once:
 pinMode(amarillo,OUTPUT);
 pinMode(rojo,OUTPUT);
 
}

void loop() {
  // put your main code here, to run repeatedly:
 digitalWrite(amarillo,HIGH);
 digitalWrite(rojo,LOW);
 delay(milisegundo);
 digitalWrite(amarillo,LOW);
 digitalWrite(rojo,HIGH);
 delay(milisegundo*2);
}
