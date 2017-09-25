Function RecogniseShapes(ArrReal[POSX][POSY], MAXWIDTH, MAXHEIGHTH)
{
  var ArrSimCenters[4][2][MAXWIDTH-1][MAXHEIGHTH-1];
  var ArrSimVectors[4][2][MAXWIDTH-1][MAXHEIGHTH-1];
  for(var j = 0; j < 4; j++)
  {
    for(var k = 0; k < 2; k++)
    {
      for(var l = 0; l < MAXWIDTH-1; l++)
      {
        for(var m = 0;m < MAXHEIGHTH-1; m++)
        {
            ArrSimVectors[l][m][j][k]=(ArrReal[j][k]!=ArrReal[j][k+1]);
            ArrSimVectors[l][m][j][k]=(ArrReal[j][k]!=ArrReal[j+1][k]);
            ArrSimVectors[l][m][j][k]=(ArrReal[j][k]!=ArrReal[j][k-1]);
            ArrSimVectors[l][m][j][k]=(ArrReal[j][k]!=ArrReal[j-1][k]);
        }

      }

    }
  }
  for(var k = 0; k < 4; k++)
  {
    for(var l = 0; l < MAXWIDTH-1; l++)
    {
      for(var m = 0;m < MAXHEIGHTH-1; m++)
      {
        if(ArrReal[POSX][POSY]){
          ArrSimCenters[k][l][m;]
        }
      }
}
