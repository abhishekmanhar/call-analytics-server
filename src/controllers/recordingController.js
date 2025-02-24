import RecordingModel from "../models/Recording.js"

export async function createRecording(req, res) {
  try {
    const recording = new RecordingModel(req.body)
    const savedRecording = await recording.save()
    res.json(savedRecording)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
