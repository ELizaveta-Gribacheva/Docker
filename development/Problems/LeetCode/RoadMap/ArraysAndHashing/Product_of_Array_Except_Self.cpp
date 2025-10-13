//
// Created by Elizaveta Gribacheva on 13.10.2025.
//

#include <iostream>
#include <string>
#include <vector>
#include <list>
using namespace std;

#define ll long long


int main(){
    int n;
    cin >> n;
    vector<int> arr(n);

    for (int i = 0; i < n; ++i) {
        cin >> arr[i];
    }
    vector<int> result(n, 1);
    int prefix = 1;
    for (int i = 0; i < n; ++i) {
        result[i] = prefix;
        prefix *= arr[i];
    }

    int postfix = 1;
    for (int j = n -1 ; j >=0; --j) {
        result[j] *= postfix;
        postfix *= arr[j];
    }

    for (int k = 0; k < n; k++) {
        cout << result[k] << ", ";
    }
    return 0;
}




