from io import BytesIO
from flask import Flask, request, render_template
from PIL import Image
import base64
import matplotlib.pyplot as plt
from colorizers import *

urls = ("/favicon.ico", "dummy")
app = Flask(__name__)

@app.route('/', methods=['GET'])
def hello():
    return 1

@app.route('/post', methods=['POST'])
def colorize(path="", use_gpu=False):
    #get the input image here

    # load model
    colorizer_siggraph17 = siggraph17(pretrained=True).eval()
    #if (use_gpu):
	#    colorizer_siggraph17.cuda()
        
    # store input image here
    img = load_img('./imgs/tesla.jpg') #replace with "path"
    (tens_l_orig, tens_l_rs) = preprocess_img(img, HW=(256,256))
    out_img_siggraph17 = postprocess_tens(tens_l_orig, colorizer_siggraph17(tens_l_rs).cpu())

    #save image here
    #plt.imsave('result.png', out_img_siggraph17)
    img_L = Image.fromarray((out_img_siggraph17*255).astype(np.uint8))
    img_B = BytesIO()
    img_L.save(img_B, 'PNG')
    img_B.seek(0)
    img_F = base64.b64encode(img_B.read()).decode()

    # return the image here
    return img_F

if __name__ == '__main__':
    app.run()