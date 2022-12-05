def median_func(data) :
    col_list=['ph','Sulfate','Trihalomethanes']
    for col in col_list : 
        if col =='ph' :
            data[col].fillna( 7.036752, inplace=True)
        elif col == 'Sulfate' :
            data[col].fillna(333.073546, inplace=True)
        elif col == 'Trihalomethanes' :
            data[col].fillna(66.622485, inplace=True)
    return data