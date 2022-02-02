import os
from gphotospy import authorize
from gphotospy.media import Media, MediaItem
from PIL import Image


CLIENT_SECRET_FILE = "../tmp/google-oauth.json"
ALBUM_ID = "ALrRkoI1hvie6qIVNtb4yrFP4mtXSMMvzz_irNqBWmhvcd2MfLrHC_ppidmGRRggnPog2COZEKf_"
OUT_PATH = "../assets/images/photos/"
NUM_PHOTOS = 12
IMAGE_WIDTH = 1920
JPEG_QUALITY = 70  # of 100

# Clear existing photos if any
with os.scandir(OUT_PATH) as it:
    for file in it:
        if not file.name.startswith('.') and file.is_file():
            os.remove(file)

# Get authorization and return a service object
service = authorize.init(CLIENT_SECRET_FILE)

media_manager = Media(service)
search_iterator = media_manager.search_album(ALBUM_ID)

try:
    i = 0
    for result in search_iterator:
        print(result.get("filename"))
        media = MediaItem(result)
        out_filename = "%03d.jpg" % i
        with open(OUT_PATH + out_filename, 'wb') as output:
            output.write(media.raw_download())
        i += 1
        if i == NUM_PHOTOS:
            break

except (StopIteration, TypeError) as e:
    print("No (more) media in album.")

# Reduce image sizes
print("Reducing image sizes...")
with os.scandir(OUT_PATH) as it:
    for file in it:
        if not file.name.startswith('.') and file.is_file():
            image = Image.open(file.path)
            width, height = image.size
            new_height = int(height * (IMAGE_WIDTH / width))
            new_image = image.resize((IMAGE_WIDTH, new_height))
            new_image.save(image.filename, quality=JPEG_QUALITY)

print("Successfully downloaded and resized images!")
