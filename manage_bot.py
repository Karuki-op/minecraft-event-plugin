import subprocess

# Function to run the Node.js bot script
def run_bot():
    try:
        subprocess.run(['node', 'bot.js'], check=True)
    except subprocess.CalledProcessError as e:
        print(f"Error running bot: {e}")

# Run the bot
if __name__ == "__main__":
    run_bot()
