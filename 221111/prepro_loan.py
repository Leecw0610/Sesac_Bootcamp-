import pandas as pd
import pickle
import numpy as np
from sklearn.preprocessing import LabelEncoder
   
def loanfunc(loan) :
    loan['Gender'].fillna('Male', inplace=True)
    loan['Married'].fillna('Yes', inplace=True)    
    loan['Dependents'].fillna(0, inplace=True)    
    loan['Self_Employed'].fillna(0, inplace=True)
    loan['LoanAmount'].fillna(128, inplace=True)
    loan['Loan_Amount_Term'].fillna\
    (360, inplace=True)
    loan['Credit_History'].fillna\
    (1, inplace=True)
       
    with open('loan_pre.pkl', 'rb') as f :
    pickle.dump(loan_pre, f)

    
    loan.drop(['Loan_Status','Loan_ID','Gender'], axis=1, inplace=True)
    
    return loan    