import json
import os
from shutil import copytree

def prompt(question, default=None):
    answer = input(f"{question} [{'Enter' if default else ''}] ")
    return answer.strip() or default

def generate_config():
    print("📦 Welcome to the Church Site Installer")

    config = {
        "church_name": prompt("Church Name:", "Your Church Name"),
        "theme_color": prompt("Theme Color (hex):", "#003366"),
        "logo_path": prompt("Path to Logo (optional):", ""),
        "hosting": prompt("Host on Firebase or Local? (firebase/local)", "firebase")
    }

    with open("../config.json", "w") as f:
        json.dump(config, f, indent=2)

    print("✅ Config generated!")

    if config["logo_path"]:
        dest = "../frontend/public/assets/logo.png"
        os.makedirs(os.path.dirname(dest), exist_ok=True)
        os.system(f'cp "{config["logo_path"]}" "{dest}"')
        print("📸 Logo copied to frontend.")

if __name__ == "__main__":
    generate_config()
