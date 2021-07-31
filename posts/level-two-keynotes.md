---
title: MtM2020 Level Two Keynotes
excerpt: Keynotes for your reference in MtM2020 Level Two.
image: level-two-keynotes.jpeg
isFeatured: false
date: '2021-07-22'
---

How is your learning journey? I hope you doing great. Level two is more challenging, as they are designed to make us struggle yet learn along the way. In this article, I am happy to share my experience in completing level two. I hope you will find these keynotes useful. 

### **2.0**
* You learn how to submit a job inside `zXXXXXX/PUBLICJCL` for credits
* When a job is submitted without errors, `CC 0000` will be its status code
* To examine the output the of job, refer to `SYSTSPRT` under the Jobs column in VSC

### 2.1 VSC2
* You learn how to edit profiles on VSC
* You will be able to apply the filter in datasets on VSC

### 2.2 PDS1
- You will be familiar with datasets and members
- To examine data attributes of a file on Zowe(VSC), simply right-click, then choose "Show dataset attributes"
- You will be asked to find a dataset stored at the device with the name VPWRKZ 
(ANSWER: MTM2020.PUBLIC.INPUT)

### 2.3 JCL1
* Job Control Language (JCL) let the system know what tasks to perform
* JCL describes the program and data used, and what to do with it when it is done processing
* You will be asked to find the SECRET word on JES1JOB1 and apply the SECRET word to JES1JOB2.JCL
* ***_(ANSWER: GIRAFFE)_***

### 2.4 USS1
* You interact with the z/OS mainframe via SHELL(i.e. terminal) on VSC
* Please confirm you are familiar with the following commands after completing this exercise:
	-	pwd
	-	ssh
	-	cd
	-	ls
	-	mkdir
	-	touch

### 2.5 POS2
* You can apply advanced filtering and editing of data sets and members
* You learn how to upload members to target locations on VSC

### 2.6 JCL2
* You learn how to fix errors on JCL
* You will be asked to fix the error on JES2JOB1 (CC 0008 will be the status code for submitting this job)

***_ANSWER_***: 

```md
### Add the below code at the bottom of JES2JOB1
// LOCATION DD DSN=MTM2020.PUBLIC.INPUT(LOCATION), DISP=SHR
```

### 2.7 USS2
* You learn using USS using VSC
* ***Hint #1:*** run `/z/public/fixfiles.sh` to generate necessary files or settings for this exercise
* ***Hint #2***: read the uss2script.sh to complete the challenge
* ***Hint #3***: don't forget the run the `chmod +x <TARGET>` command to ensure your solution is executable on SHELL

### 2.8 ZOAU1
* You learn Z Open Automation Utilities(ZOA Utilities) on z/OS
* ZOA Utilities let you perform many tasks on z/OS without needing to get into JCL
* There is an error on the target file for this exercise, you need to fix it for finishing this exercise
(ANSWER: add one space before the code in the target file)

### 2.9 ZOAU2
* You learn how to use ZOA utilities and other languages with greater capacities and flexibilities 
* We use Python 3 along with ZOA Utilities for this exercise
* Please make sure you have reference to the document named Z Open Automation Utilities in Python on IBM
* We learn the Luhn algorithm to verify credit cards and update the functions inside `cc_check.py`

***ANSWER for exercise 2.9:***

1. copy the `luhn` function in `luhn.py` 
2. replace the `is_even` function in `cc_check.py` with the content copied in step 1
3. replace the `is_even` calls inside `cc_check.py` with `luhn` calls instead
4. update the line from `cc_digits = int (cc_line[8:16])` to `cc_digits = int (cc_line[5:21])`
5. update `dylist.py` by adding the following codes at the end of the file:

```py
Datasets.create("ZXXXXXX.OUTPUT.CCINVALDD","SEQ")
Datasets.write("ZXXXXXX.OUTPUT.CCINVALID", report_output)
```

### 2.10 LNX1 and 2.11 LNX2 (Optional)
* You have free access to one LinuxONE virtual server from IBM
* You can practice the skills of SHELL operations on the virtual server
* You learn how to upload a static webpage to the server so that everyone can visit that page

There are more knowledge points in level two than level one we need to revise after finishing all exercises. If there is any concept for which you need more explanations,  Google is always your best friend!

I hope you find these keynotes useful. Hope to see you soon. Keep Hacking!

Learn more about Master the Mainframe 2020 [here](https://www.ibm.com/it-infrastructure/z/education/master-the-mainframe).