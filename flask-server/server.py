from flask import Flask, request, render_template
import matplotlib.pyplot as plt
from colorizers import *

urls = ("/favicon.ico", "dummy")
app = Flask(__name__)

@app.route('/', methods=['GET'])
def hello():
    return 1

@app.route('/post', methods=['POST'])
def colorize():
    #get the input image here
    #--putcodehere--

    # load model
    colorizer_siggraph17 = siggraph17(pretrained=True).eval()

    #store input image here
    img = load_img('./imgs/tesla.jpg')
    (tens_l_orig, tens_l_rs) = preprocess_img(img, HW=(256,256))
    out_img_siggraph17 = postprocess_tens(tens_l_orig, colorizer_siggraph17(tens_l_rs).cpu())

    #save image here
    plt.imsave('result.png', out_img_siggraph17)
    #--putcodehere-- not sure how to convert para returnable

    # return the image here
    return 1 #--putcodehere--

if __name__ == '__main__':
    app.run()