
//---------------------------------------------------------------------------
// Program:  Algorithm.cpp
// Purpose:  This program is the basis of a function that has the power to
//iterate through any matrix/array of data and show the differences. Could
//be used to convert raster images into vector-defined images.
//---------------------------------------------------------------------------

#include <cstdlib>
#include <iostream>
#include <fstream>
using namespace std;


const int MAXWIDTH=20;
const int MAXHEIGHTH=20;
// Global Variables
// Note: DO NOT EDIT THESE
void RecogniseShapes(int ArrReal[MAXWIDTH][MAXHEIGHTH])
{

  int ArrSimCenters[MAXWIDTH+1][MAXHEIGHTH+1][4]={0};
  int ArrSimVectors[4][MAXWIDTH][MAXHEIGHTH]={0};
  for(int j = 0; j < MAXWIDTH; j++)
  {
    for(int k = 0; k < MAXHEIGHTH; k++)
    {
      if(1==(MAXHEIGHTH*MAXWIDTH))
        {

        }
      else if((1==MAXWIDTH) && (k==0))
        ArrSimVectors[1][j][k]=(ArrReal[j][k]!=ArrReal[j-1][k]);
      else if((1==MAXWIDTH) && (k==MAXHEIGHTH-1))
        ArrSimVectors[3][j][k]=(ArrReal[j][k]!=ArrReal[j][k-1]);
      else if(1==MAXWIDTH)
      {
        ArrSimVectors[1][j][k]=(ArrReal[j][k]!=ArrReal[j][k+1]);
        ArrSimVectors[3][j][k]=(ArrReal[j][k]!=ArrReal[j][k-1]);
      }
      else if((1==MAXHEIGHTH)&&(j==0))
        ArrSimVectors[0][j][k]=(ArrReal[j][k]!=ArrReal[j+1][k]);
      else if((1==MAXHEIGHTH) && (j==MAXWIDTH-1))
        ArrSimVectors[2][j][k]=(ArrReal[j][k]!=ArrReal[j-1][k]);
      else if(1==MAXHEIGHTH)
      {
        ArrSimVectors[0][j][k]=(ArrReal[j][k]!=ArrReal[j+1][k]);
        ArrSimVectors[2][j][k]=(ArrReal[j][k]!=ArrReal[j-1][k]);
      }
      else if((j==0) && (k==0)){
        ArrSimVectors[0][j][k]=(ArrReal[j][k]!=ArrReal[j+1][k]);
        ArrSimVectors[1][j][k]=(ArrReal[j][k]!=ArrReal[j][k+1]);
      }
      else if((j==MAXWIDTH-1) && (k==0)){
        ArrSimVectors[1][j][k]=(ArrReal[j][k]!=ArrReal[j][k+1]);
        ArrSimVectors[2][j][k]=(ArrReal[j][k]!=ArrReal[j-1][k]);
      }
      else if((j==MAXWIDTH-1) && (k==MAXHEIGHTH-1)){
        ArrSimVectors[2][j][k]=(ArrReal[j][k]!=ArrReal[j-1][k]);
        ArrSimVectors[3][j][k]=(ArrReal[j][k]!=ArrReal[j][k-1]);
      }
      else if((j==0) && (k==MAXHEIGHTH-1)){
        ArrSimVectors[3][j][k]=(ArrReal[j][k]!=ArrReal[j][k-1]);
        ArrSimVectors[0][j][k]=(ArrReal[j][k]!=ArrReal[j+1][k]);
      }
      else if(j==0){
        ArrSimVectors[0][j][k]=(ArrReal[j][k]!=ArrReal[j+1][k]);
        ArrSimVectors[1][j][k]=(ArrReal[j][k]!=ArrReal[j][k-1]);
        ArrSimVectors[3][j][k]=(ArrReal[j][k]!=ArrReal[j][k-1]);
      }
      else if(k==0){
        ArrSimVectors[0][j][k]=(ArrReal[j][k]!=ArrReal[j+1][k]);
        ArrSimVectors[1][j][k]=(ArrReal[j][k]!=ArrReal[j][k+1]);
        ArrSimVectors[2][j][k]=(ArrReal[j][k]!=ArrReal[j-1][k]);
      }
      else if(j==MAXWIDTH-1){
        ArrSimVectors[1][j][k]=(ArrReal[j][k]!=ArrReal[j][k+1]);
        ArrSimVectors[2][j][k]=(ArrReal[j][k]!=ArrReal[j-1][k]);
        ArrSimVectors[3][j][k]=(ArrReal[j][k]!=ArrReal[j][k-1]);
      }
      else if(k==MAXHEIGHTH-1){
        ArrSimVectors[0][j][k]=(ArrReal[j][k]!=ArrReal[j+1][k]);
        ArrSimVectors[2][j][k]=(ArrReal[j][k]!=ArrReal[j-1][k]);
        ArrSimVectors[3][j][k]=(ArrReal[j][k]!=ArrReal[j][k-1]);
      }
      else if(((j !=0) && (k !=0)) && ((j!=MAXWIDTH-1) &&(k != MAXHEIGHTH-1)))
      {
        ArrSimVectors[0][j][k]=(ArrReal[j][k]!=ArrReal[j+1][k]);
        ArrSimVectors[1][j][k]=(ArrReal[j][k]!=ArrReal[j][k+1]);
        ArrSimVectors[2][j][k]=(ArrReal[j][k]!=ArrReal[j-1][k]);
        ArrSimVectors[3][j][k]=(ArrReal[j][k]!=ArrReal[j][k-1]);
      }
      cout << "j: " << j << "  k: "<< k << endl;
      cout << endl << "  " << ArrReal[j][k-1] << endl;
      cout << "  " << ArrSimVectors[3][j][k] << endl;
      cout << ArrReal[j-1][k] << ArrSimVectors[2][j][k] << ArrReal[j][k] << ArrSimVectors[0][j][k] << ArrReal[j+1][k] << endl;
      cout << "  " << ArrSimVectors[1][j][k] << endl;
      cout << "  " << ArrReal[j][k+1] << endl <<endl;

    }
  }

    for(int l = 0; l < MAXWIDTH; l++) //position
    {
      for(int m = 0; m < MAXHEIGHTH; m++)
      {
        if(ArrReal[l][m])
        {
          for(int x = 0; x <= MAXWIDTH; x++)
          {
            for(int y = 0;y <= MAXHEIGHTH; y++)
            {
                  if((x==MAXWIDTH) &&(y==MAXHEIGHTH))
                    ArrSimCenters[x][y][2] = 1;
                  else if((x==0) &&(y==MAXHEIGHTH))
                    ArrSimCenters[x][y][3] = 1;
                  else if((x==0) &&(y==0))
                    ArrSimCenters[x][y][0] = 1;
                  else if((x==MAXWIDTH) &&(y==0))
                    ArrSimCenters[x][y][1] = 1;
                  else if(x==MAXWIDTH)
                    {
                    ArrSimCenters[x][y][1] = 1;
                    ArrSimCenters[x][y][2] = 1;
                    }
                  else if(y==MAXHEIGHTH)
                    {
                    ArrSimCenters[x][y][2] = 1;
                    ArrSimCenters[x][y][3] = 1;
                    }
                  else if(x==0)
                    {
                    ArrSimCenters[x][y][3] = 1;
                    ArrSimCenters[x][y][0] = 1;
                    }
                  else if(y==0)
                    {
                    ArrSimCenters[x][y][0] = 1;
                    ArrSimCenters[x][y][1] = 1;
                    }
                  else
                  {
                    ArrSimCenters[x][y][0]=1;
                    ArrSimCenters[x][y][1]=1;
                    ArrSimCenters[x][y][2]=1;
                    ArrSimCenters[x][y][3]=1;
                  }
              }
            }
        }

        else{
          for(int x = 0; x <= MAXWIDTH; x++)
          {
            for(int y = 0;y <= MAXHEIGHTH; y++)
            {
              ArrSimCenters[x][y][0]=0;
              ArrSimCenters[x][y][1]=0;
              ArrSimCenters[x][y][2]=0;
              ArrSimCenters[x][y][3]=0;
              cout << "x: "<< x << " y: " << y << "\n" <<
              ArrSimCenters[x][y][2] << " " << ArrSimCenters[x][y][3] << "\n"
              "\n" << ArrSimCenters[x][y][1] << " "<< ArrSimCenters[x][y][0] << "\n\n";

            }
          }
        }
      }
  }
}

int main(){
  int arr[20][20];
  for(int i = 0; i < 20; i++)
    for(int h = 0; h < 20; h++)
      arr[i][h]=(rand()%2);
RecogniseShapes(arr);
}
