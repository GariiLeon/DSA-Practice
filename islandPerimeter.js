/**
 * JULY LeetCoding Challenge, Day 7
 * 
 * You are given a map in form of a two-dimensional integer grid where 1 represents land and 0 represents water.
 * Grid cells are connected horizontally/vertically (not diagonally).
 * The grid is completely surrounded by water, and there is exactly one island(i.e., one or more connected land cells).
 * The island doesn't have "lakes" (water inside that isn't connected to the water around the island).
 * One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100.
 * Determine the perimeter of the island.
 * @param {number[][]} grid 
 * @returns {number}
 */
function islandPerimeter(grid) {
    let iLength = grid.length;
    let jLength = grid[0].length;
    // let visited = Array.from({length : iLength},()=>
    //     Array.from({length : jLength},()=>false)
    // );
    let visited = new Array(iLength);
    for(let i=0;i<iLength;i++){
        visited[i] = new Array(jLength).fill(false);
    }
    for(let i=0;i<iLength;i++){
        for(let j=0;j<jLength;j++){
            if(grid[i][j]==1){
                visited[i][j] = true;
                return start(i,j,grid,visited,iLength,jLength);
            }
        }
    }
};

function start(i,j,grid,visited,iLen,jLen){
    let perimeter = 4;
    if(isALand(i-1,j,grid,iLen,jLen)){
        perimeter--;
        if(!visited[i-1][j]){
            visited[i-1][j]=true;
            perimeter += start(i-1,j,grid,visited,iLen,jLen);
        }
    }
    if(isALand(i+1,j,grid,iLen,jLen)){
        perimeter--;
        if(!visited[i+1][j]){
            visited[i+1][j]=true;
            perimeter += start(i+1,j,grid,visited,iLen,jLen);
        }
    }
    if(isALand(i,j-1,grid,iLen,jLen)){
        perimeter--;
        if(!visited[i][j-1]){
            visited[i][j-1] = true;
            perimeter += start(i,j-1,grid,visited,iLen,jLen);
        }
    }
    if(isALand(i,j+1,grid,iLen,jLen)){
        perimeter--;
        if(!visited[i][j+1]){
            visited[i][j+1] = true;
            perimeter += start(i,j+1,grid,visited,iLen,jLen);
        }
    }
    return perimeter;
}

function isALand(i,j,grid,iLen,jLen){
    if(i<0 || j<0 || i>=iLen || j>=jLen) return false;
    if(grid[i][j]==1) return true;
    return false;
}

console.log(islandPerimeter([[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]])) // 16
console.log(islandPerimeter([[1,1]])) // 6