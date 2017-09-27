function RecogniseShapes(ArrReal)
{
  var ArrSimCenters[4][ArrReal[][4].length-1][ArrReal[2][].length-1]=0;
  var ArrSimVectors[4][2][2][ArrReal[][4].length-1][ArrReal[2][].length-1]=0;
  for(var j = 0; j < 4; j++)
  {
    for(var k = 0; k < 2; k++)
    {
      for(var l = 0; l < MAXWIDTH-1; l++)
      {
        for(var m = 0;m < MAXHEIGHTH; m++)
        {
            ArrSimVectors[l][m][0][j][k]=(ArrReal[j][k]!=ArrReal[j][k+1]);
            ArrSimVectors[l][m][0][j][k]=(ArrReal[j][k]!=ArrReal[j][k-1]);

          }
      }
      for(var o=0; o<MAXWIDTH; o++)
      {

        for(var p=0; p<MAXHEIGHTH-1; p++)
        {
          ArrSimVectors[o][p][1][j][k]=(ArrReal[j][k]!=ArrReal[j+1][k];
          ArrSimVectors[o][p][1][j][k]=(ArrReal[j][k]!=ArrReal[j-1][k];
        }
      }
    }
  }
    for(var l = 0; l < MAXWIDTH-1; l++)
    {
      for(var m = 0;m < MAXHEIGHTH-1; m++)
      {
        for(var x=0; x<MAXWIDTH; x++) //position
        {
          for(var y=0; y<MAXHEIGHTH; y++)
          {
            if(l==0)
            {
            if(ArrReal[x][y]){
              ArrSimCenters[0][l][m]=1;
            if(ArrReal[])
            }
            }
          }
        }
      }
    }
}
console.log(RecogniseShapes([[5,7,9,10],[20 30 40 50]]))
