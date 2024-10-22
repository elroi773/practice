package javaclass;

interface Sound {
    void SoundUp(int level);
    void SoundDown(int level);
}

interface AdvancedSound extends Sound {
    void SoundOff();
}

class Tv implements AdvancedSound {
    private int SndLevel;

    public Tv() {
        SndLevel = 0;
    }

    public void SoundUp(int level) {
        SndLevel += level;
        System.out.println("TV Sound Up:" + SndLevel);
    }

    public void SoundDown(int level) {
        SndLevel -= level;
        if (SndLevel < 0) SndLevel = 0;
        System.out.println("TV Sound Down:" + SndLevel);
    }

    public void SoundOff() {
        SndLevel = 0;
        System.out.println("TV Sound Off:" + SndLevel);
    }
}

class Radio implements AdvancedSound {
    private int SndLevel;

    public Radio() {
        SndLevel = 0;
    }

    public void SoundUp(int level) {
        SndLevel += level;
        System.out.println("Radio Sound Up:" + SndLevel);
    }

    public void SoundDown(int level) {
        SndLevel -= level;
        if (SndLevel < 0) SndLevel = 0;
        System.out.println("Radio Sound Down:" + SndLevel);
    }

    public void SoundOff() {
        SndLevel = 0;
        System.out.println("Radio Sound Off:" + SndLevel);
    }
}

public class SoundExam {
    public static void main(String[] args) {
        AdvancedSound radio = new Radio();
        AdvancedSound tv = new Tv();

        radio.SoundUp(5);
        radio.SoundUp(7);

        tv.SoundUp(5);
        tv.SoundUp(10);
        tv.SoundDown(8);
        tv.SoundOff();
    }
}
