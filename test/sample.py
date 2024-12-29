import serial
import time

# 接続されているシリアルデバイスのパスを指定（例：/dev/tty.usbserial-1420）
SERIAL_PORT = "/dev/tty.usbserial-1420"
BAUD_RATE = 9600  # スピードガンが採用しているボーレートに合わせる


def main():
    # シリアルポートを開く
    ser = serial.Serial(
        port=SERIAL_PORT, baudrate=BAUD_RATE, timeout=1  # 読み込みのタイムアウト(秒)
    )

    # デバイスが安定するまで少し待つ
    time.sleep(2)

    # データ読み込みループ
    try:
        while True:
            line = ser.readline()  # 1行分のデータを取得
            if line:
                data = line.decode("utf-8", errors="ignore").strip()
                print(f"Received: {data}")
    except KeyboardInterrupt:
        # Ctrl + C でループ脱出したい場合
        pass
    finally:
        ser.close()


if __name__ == "__main__":
    main()
